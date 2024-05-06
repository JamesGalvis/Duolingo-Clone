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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CoursesService = class CoursesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCourses() {
        return await this.prisma.courses.findMany();
    }
    async getCourseById(id) {
        return await this.prisma.courses.findFirst({
            where: {
                id,
            },
        });
    }
    async getCourseProgress(userId) {
        const userProgress = await this.prisma.userProgress.findUnique({
            where: {
                userId,
            },
            include: {
                activeCourse: true,
            },
        });
        if (!userId || !userProgress.activeCourse) {
            return null;
        }
        const unitsInActiveCourse = await this.prisma.units.findMany({
            where: {
                courseId: userProgress.activeCourseId,
            },
            orderBy: {
                order: 'asc',
            },
            include: {
                lessons: {
                    include: {
                        unit: true,
                        challenges: {
                            include: {
                                challengeProgress: {
                                    where: {
                                        userId,
                                    },
                                },
                            },
                        },
                    },
                    orderBy: {
                        order: 'asc',
                    },
                },
            },
        });
        const firstUncompletedLesson = unitsInActiveCourse
            .flatMap((unit) => unit.lessons)
            .find((lesson) => {
            return lesson.challenges.some((challenge) => {
                return (!challenge.challengeProgress ||
                    challenge.challengeProgress.length === 0 ||
                    challenge.challengeProgress.some((progress) => progress.completed === false));
            });
        });
        return {
            activeLesson: firstUncompletedLesson,
            activeLessonId: firstUncompletedLesson.id,
        };
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CoursesService);
//# sourceMappingURL=courses.service.js.map