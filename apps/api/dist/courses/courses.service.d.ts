import { Courses } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    getCourses(): Promise<Courses[] | [] | null>;
    getCourseById(id: string): Promise<Courses | null | undefined>;
    getCourseProgress(userId: string): Promise<{
        activeLesson: {
            challenges: ({
                challengeProgress: {
                    id: string;
                    userId: string;
                    completed: boolean;
                    challengeId: string;
                }[];
            } & {
                id: string;
                type: import(".prisma/client").$Enums.ChallengeType;
                question: string;
                order: number;
                lessonId: string;
            })[];
            unit: {
                id: string;
                title: string;
                description: string;
                order: number;
                courseId: string;
            };
        } & {
            id: string;
            title: string;
            order: number;
            unitId: string;
        };
        activeLessonId: string;
    }>;
}
