import { Injectable } from '@nestjs/common';
import { CoursesService } from 'src/courses/courses.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LessonsService {
  constructor(
    private prisma: PrismaService,
    private coursesService: CoursesService,
  ) {}

  async getLesson(id: string, userId: string) {
    if (!userId) {
      return null;
    }

    const courseProgress = await this.coursesService.getCourseProgress(userId);

    const lessonId = id || courseProgress.activeLessonId;

    if (!lessonId) {
      return null;
    }

    const data = await this.prisma.lessons.findFirst({
      where: {
        id: lessonId,
      },
      include: {
        challenges: {
          orderBy: {
            order: 'asc',
          },
          include: {
            challengeOptions: true,
            challengeProgress: {
              where: {
                userId,
              },
            },
          },
        },
      },
    });

    if (!data || !data.challenges) {
      return null;
    }

    const normalizedChallenges = data.challenges.map((challenge) => {
      const completed =
        challenge.challengeProgress &&
        challenge.challengeProgress.length > 0 &&
        challenge.challengeProgress.every((progres) => progres.completed);

      return { ...challenge, completed };
    });

    return { ...data, challenges: normalizedChallenges };
  }

  async getLessonPercentage(userId: string) {
    const courseProgress = await this.coursesService.getCourseProgress(userId);

    if (!courseProgress.activeLessonId) {
      return 0;
    }

    const lesson = await this.getLesson(courseProgress.activeLessonId, userId);

    if (!lesson) {
      return 0;
    }

    const completedChallenges = lesson.challenges.filter(
      (challenge) => challenge.completed,
    );

    const percentage = Math.round(
      (completedChallenges.length / lesson.challenges.length) * 100,
    );

    return percentage;
  }
}
