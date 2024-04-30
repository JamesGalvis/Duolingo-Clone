import { Injectable } from '@nestjs/common';
import { Courses } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async getCourses(): Promise<Courses[] | [] | null> {
    return this.prisma.courses.findMany();
  }
}
