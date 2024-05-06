import { Injectable } from '@nestjs/common';
import { Courses } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async getCourses(): Promise<Courses[] | [] | null> {
    return await this.prisma.courses.findMany();
  }

  async getCourseById(id: string): Promise<Courses | null | undefined> {
    return await this.prisma.courses.findFirst({
      where: {
        id,
      },
    });
  }

  async getCourseProgress(userId: string) {
    const userProgress = await this.prisma.userProgress.findUnique({
      where: {
        userId,
      },
      include: {
        activeCourse: true,
      },
    });

    if (!userId || !userProgress.activeCourse) {
      return null;
    }

    const unitsInActiveCourse = await this.prisma.units.findMany({
      where: {
        courseId: userProgress.activeCourseId,
      },
      orderBy: {
        order: 'asc',
      },
      include: {
        lessons: {
          include: {
            unit: true,
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
          orderBy: {
            order: 'asc',
          },
        },
      },
    });

    const firstUncompletedLesson = unitsInActiveCourse
      .flatMap((unit) => unit.lessons)
      .find((lesson) => {
        return lesson.challenges.some((challenge) => {
          return (
            !challenge.challengeProgress ||
            challenge.challengeProgress.length === 0 ||
            challenge.challengeProgress.some(
              (progress) => progress.completed === false,
            )
          );
        });
      });

    return {
      activeLesson: firstUncompletedLesson,
      activeLessonId: firstUncompletedLesson.id,
    };
  }
}
