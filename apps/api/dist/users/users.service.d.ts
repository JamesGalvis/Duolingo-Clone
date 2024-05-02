import { Courses, UserProgress } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUserProgress(userId: string): Promise<(UserProgress & {
        activeCourse: Courses;
    }) | null | undefined>;
    upsertUserProgress(courseId: string, userId: string): Promise<UserProgress | null | undefined>;
}
