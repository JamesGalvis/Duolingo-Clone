import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join('__dirname', '../../', 'client/dist'),
    // }),
    CoursesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
