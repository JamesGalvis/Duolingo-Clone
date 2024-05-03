import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserProgress(userId: string): Promise<{
        userId: string;
        userName: string;
        userAvatar: string;
        hearts: number;
        points: number;
        activeCourseId: string;
    } & {
        activeCourse: {
            id: string;
            title: string;
            imageSrc: string;
        };
    }>;
    upsertUserProgress(courseId: string, userId: string): Promise<{
        userId: string;
        userName: string;
        userAvatar: string;
        hearts: number;
        points: number;
        activeCourseId: string;
    }>;
}
