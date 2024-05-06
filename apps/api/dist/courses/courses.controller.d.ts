import { CoursesService } from './courses.service';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    getCourses(): Promise<{
        id: string;
        title: string;
        imageSrc: string;
    }[] | []>;
    getCourseById(id: string): Promise<{
        id: string;
        title: string;
        imageSrc: string;
    }>;
    getCourseProgress(userId: string): Promise<{
        activeLesson: {
            unit: {
                id: string;
                title: string;
                description: string;
                order: number;
                courseId: string;
            };
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
        } & {
            id: string;
            title: string;
            order: number;
            unitId: string;
        };
        activeLessonId: string;
    }>;
}
