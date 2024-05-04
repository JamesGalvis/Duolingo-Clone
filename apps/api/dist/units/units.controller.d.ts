import { UnitsService } from './units.service';
export declare class UnitsController {
    private readonly unitsService;
    constructor(unitsService: UnitsService);
    getCourses(userId: string): Promise<{
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
