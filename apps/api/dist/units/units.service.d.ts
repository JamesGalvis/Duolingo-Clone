import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
export declare class UnitsService {
    private prisma;
    private usersService;
    constructor(prisma: PrismaService, usersService: UsersService);
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
