import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get('/lesson-percentage/:userId')
  async getLessonPercentage(@Param('userId') userId: string) {
    try {
      if (!userId) throw new BadRequestException(`User userId not provided`);

      const lessonPercentage =
        await this.lessonsService.getLessonPercentage(userId);

      return lessonPercentage;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
