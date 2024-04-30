import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join('__dirname', '../../', 'client/dist'),
    // }),
    CoursesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
