import { Courses } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    getCourses(): Promise<Courses[] | [] | null>;
}
