import { PrismaService } from 'src/prisma/prisma.service';
export declare class UnitsService {
    private prisma;
    constructor(prisma: PrismaService);
    getUnits(userId: string): Promise<{
        lessons: {
            completed: boolean;
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
            id: string;
            title: string;
            order: number;
            unitId: string;
        }[];
        id: string;
        title: string;
        description: string;
        order: number;
        courseId: string;
    }[]>;
}
