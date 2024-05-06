import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UnitsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async getUnits(userId: string) {
    const userProgress = await this.usersService.getUserProgress(userId);

    if (!userId || !userProgress.activeCourseId) {
      return [];
    }

    const data = await this.prisma.units.findMany({
      where: {
        courseId: userProgress.activeCourseId,
      },
      include: {
        lessons: {
          include: {
            challenges: {
              include: {
                challengeProgress: {
                  where: {
                    userId,
                  },
                },
              },
            },
          },
        },
      },
    });

    const normalizedData = data.map((unit) => {
      const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
        if (lesson.challenges.length === 0) {
          return { ...lesson, completed: false };
        }

        const allCompletedChallenges = lesson.challenges.every((challenge) => {
          return (
            challenge.challengeProgress &&
            challenge.challengeProgress.length > 0 &&
            challenge.challengeProgress.every((progress) => progress.completed)
          );
        });

        return { ...lesson, completed: allCompletedChallenges };
      });

      return { ...unit, lessons: lessonsWithCompletedStatus };
    });

    return normalizedData;
  }
}
