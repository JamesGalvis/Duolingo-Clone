"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonsService = void 0;
const common_1 = require("@nestjs/common");
const courses_service_1 = require("../courses/courses.service");
const prisma_service_1 = require("../prisma/prisma.service");
let LessonsService = class LessonsService {
    constructor(prisma, coursesService) {
        this.prisma = prisma;
        this.coursesService = coursesService;
    }
    async getLesson(id, userId) {
        if (!userId) {
            return null;
        }
        const courseProgress = await this.coursesService.getCourseProgress(userId);
        const lessonId = id || courseProgress.activeLessonId;
        if (!lessonId) {
            return null;
        }
        const data = await this.prisma.lessons.findFirst({
            where: {
                id: lessonId,
            },
            include: {
                challenges: {
                    orderBy: {
                        order: 'asc',
                    },
                    include: {
                        challengeOptions: true,
                        challengeProgress: {
                            where: {
                                userId,
                            },
                        },
                    },
                },
            },
        });
        if (!data || !data.challenges) {
            return null;
        }
        const normalizedChallenges = data.challenges.map((challenge) => {
            const completed = challenge.challengeProgress &&
                challenge.challengeProgress.length > 0 &&
                challenge.challengeProgress.every((progres) => progres.completed);
            return { ...challenge, completed };
        });
        return { ...data, challenges: normalizedChallenges };
    }
    async getLessonPercentage(userId) {
        const courseProgress = await this.coursesService.getCourseProgress(userId);
        if (!courseProgress.activeLessonId) {
            return 0;
        }
        const lesson = await this.getLesson(courseProgress.activeLessonId, userId);
        if (!lesson) {
            return 0;
        }
        const completedChallenges = lesson.challenges.filter((challenge) => challenge.completed);
        const percentage = Math.round((completedChallenges.length / lesson.challenges.length) * 100);
        return percentage;
    }
};
exports.LessonsService = LessonsService;
exports.LessonsService = LessonsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        courses_service_1.CoursesService])
], LessonsService);
//# sourceMappingURL=lessons.service.js.map