import { CoursesService } from './courses.service';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    getCourses(): Promise<[] | {
        id: string;
        title: string;
        imageSrc: string;
    }[]>;
}
