import { Module } from '@nestjs/common';
import { UnitsController } from './units.controller';
import { UnitsService } from './units.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [UnitsController],
  providers: [UnitsService],
  imports: [PrismaModule, UsersModule],
})
export class UnitsModule {}
