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
exports.UnitsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const users_service_1 = require("../users/users.service");
let UnitsService = class UnitsService {
    constructor(prisma, usersService) {
        this.prisma = prisma;
        this.usersService = usersService;
    }
    async getUnits(userId) {
        const userProgress = await this.usersService.getUserProgress(userId);
        if (!userId || !userProgress.activeCourseId) {
            return [];
        }
        const data = await this.prisma.units.findMany({
            where: {
                courseId: userProgress.activeCourseId,
            },
            include: {
                lessons: {
                    include: {
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
                },
            },
        });
        const normalizedData = data.map((unit) => {
            const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
                if (lesson.challenges.length === 0) {
                    return { ...lesson, completed: false };
                }
                const allCompletedChallenges = lesson.challenges.every((challenge) => {
                    return (challenge.challengeProgress &&
                        challenge.challengeProgress.length > 0 &&
                        challenge.challengeProgress.every((progress) => progress.completed));
                });
                return { ...lesson, completed: allCompletedChallenges };
            });
            return { ...unit, lessons: lessonsWithCompletedStatus };
        });
        return normalizedData;
    }
};
exports.UnitsService = UnitsService;
exports.UnitsService = UnitsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        users_service_1.UsersService])
], UnitsService);
//# sourceMappingURL=units.service.js.map