import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    return await this.coursesService.getCourses();
  }

  @Get(':id')
  async getCourseById(@Param('id') id: string) {
    try {
      if (!id) throw new BadRequestException(`Course id not provided`);

      const course = await this.coursesService.getCourseById(id);

      if (!course) throw new NotFoundException('User progress not found');

      return course;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
