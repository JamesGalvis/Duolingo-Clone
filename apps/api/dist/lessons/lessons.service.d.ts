import { CoursesService } from 'src/courses/courses.service';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class LessonsService {
    private prisma;
    private coursesService;
    constructor(prisma: PrismaService, coursesService: CoursesService);
    getLesson(id: string, userId: string): Promise<{
        challenges: {
            completed: boolean;
            challengeOptions: {
                id: string;
                text: string;
                correct: boolean;
                imageSrc: string;
                audioSrc: string;
                challengeId: string;
            }[];
            challengeProgress: {
                id: string;
                userId: string;
                completed: boolean;
                challengeId: string;
            }[];
            id: string;
            type: import(".prisma/client").$Enums.ChallengeType;
            question: string;
            order: number;
            lessonId: string;
        }[];
        id: string;
        title: string;
        order: number;
        unitId: string;
    }>;
    getLessonPercentage(userId: string): Promise<number>;
}
