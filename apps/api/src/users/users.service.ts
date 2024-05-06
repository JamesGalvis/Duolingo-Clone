import { Injectable, NotFoundException } from '@nestjs/common';
import { Courses, UserProgress } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserProgress(
    userId: string,
  ): Promise<(UserProgress & { activeCourse: Courses }) | null | undefined> {
    return await this.prisma.userProgress.findUnique({
      where: {
        userId,
      },
      include: {
        activeCourse: true,
      },
    });
  }

  async upsertUserProgress(
    courseId: string,
    userId: string,
  ): Promise<UserProgress | null | undefined> {
    const course = await this.prisma.courses.findFirst({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    // TODO: Enable once units and lessons are added
    // if (!course.units.length || !course.units[0].lessons.length) {
    //   throw new Error("Course empty")
    // }

    const existingUserProgress = await this.prisma.userProgress.findFirst({
      where: {
        userId,
      },
    });

    if (existingUserProgress) {
      return await this.prisma.userProgress.update({
        where: {
          userId,
        },
        data: {
          activeCourseId: courseId,
        },
      });
    }

    return await this.prisma.userProgress.create({
      data: {
        userId,
        activeCourseId: courseId,
      },
    });
  }
}
