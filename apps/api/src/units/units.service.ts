import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UnitsService {
  constructor(private prisma: PrismaService) {}

  async getUnits(userId: string) {
    const userProgress = await this.prisma.userProgress.findUnique({
      where: {
        userId,
      },
      include: {
        activeCourse: true,
      },
    });

    if (!userProgress.activeCourseId) {
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
                challengeProgress: true,
              },
            },
          },
        },
      },
    });

    const normalizedData = data.map((unit) => {
      const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
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
