import { Controller, Get, Param } from '@nestjs/common';
import { UnitsService } from './units.service';

@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Get(':userId')
  async getCourses(@Param('userId') userId: string) {
    return await this.unitsService.getUnits(userId);
  }
}
