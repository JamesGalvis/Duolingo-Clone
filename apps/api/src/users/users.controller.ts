import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUserProgress(@Param('userId') userId: string) {
    try {
      if (!userId) throw new BadRequestException(`User id not provided`);

      const user = this.usersService.getUserProgress(userId);

      if (!user) throw new NotFoundException('User progress not found');

      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get(':courseId/:userId')
  async upsertUserProgress(
    @Param('courseId') courseId: string,
    @Param('userId') userId: string,
  ) {
    try {
      if (!courseId) throw new BadRequestException(`Course id not provided`);
      if (!userId) throw new BadRequestException(`User id not provided`);

      return this.usersService.upsertUserProgress(courseId, userId);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
