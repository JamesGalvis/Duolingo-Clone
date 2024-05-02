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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getUserProgress(userId) {
        try {
            if (!userId)
                throw new common_1.BadRequestException(`User id not provided`);
            const user = this.usersService.getUserProgress(userId);
            if (!user)
                throw new common_1.NotFoundException('User progress not found');
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async upsertUserProgress(courseId, userId) {
        try {
            if (!courseId)
                throw new common_1.BadRequestException(`Course id not provided`);
            if (!userId)
                throw new common_1.BadRequestException(`User id not provided`);
            return this.usersService.upsertUserProgress(courseId, userId);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserProgress", null);
__decorate([
    (0, common_1.Get)(':courseId/:userId'),
    __param(0, (0, common_1.Param)('courseId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "upsertUserProgress", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map