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
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
//   import { Length, IsNotEmpty } from "class-validator";
var School = /** @class */ (function () {
    function School() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], School.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 250
        }),
        __metadata("design:type", String)
    ], School.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200
        }),
        __metadata("design:type", String)
    ], School.prototype, "logo", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            default: '000.000.000.000',
            length: 20
        }),
        __metadata("design:type", String)
    ], School.prototype, "ip", void 0);
    __decorate([
        typeorm_1.Column({
            default: true
        }),
        __metadata("design:type", Boolean)
    ], School.prototype, "showTimetable", void 0);
    __decorate([
        typeorm_1.Column({
            default: 1200
        }),
        __metadata("design:type", Number)
    ], School.prototype, "timetableRepeat", void 0);
    __decorate([
        typeorm_1.Column({
            default: 30000
        }),
        __metadata("design:type", Number)
    ], School.prototype, "bellDuration", void 0);
    __decorate([
        typeorm_1.Column({
            default: 6000
        }),
        __metadata("design:type", Number)
    ], School.prototype, "slideDuration", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            length: 40,
            default: 'yellow'
        }),
        __metadata("design:type", String)
    ], School.prototype, "color1", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            length: 40,
            default: '#002bff33'
        }),
        __metadata("design:type", String)
    ], School.prototype, "color2", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], School.prototype, "restart", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'date',
            default: null
        }),
        __metadata("design:type", Date)
    ], School.prototype, "firstSemester", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'date',
            default: null
        }),
        __metadata("design:type", Date)
    ], School.prototype, "secondSemester", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'date',
            default: null
        }),
        __metadata("design:type", Date)
    ], School.prototype, "endSemesters", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'time'
        }),
        __metadata("design:type", String)
    ], School.prototype, "turnOnTime", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'time'
        }),
        __metadata("design:type", String)
    ], School.prototype, "turnOffTime", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int'
        }),
        __metadata("design:type", Number)
    ], School.prototype, "version", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'datetime'
        }),
        __metadata("design:type", Date)
    ], School.prototype, "lastChange", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'datetime'
        }),
        __metadata("design:type", Date)
    ], School.prototype, "receiptTime", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return User_1.User; }, function (user) { return user.school; }),
        __metadata("design:type", Array)
    ], School.prototype, "users", void 0);
    School = __decorate([
        typeorm_1.Entity()
    ], School);
    return School;
}());
exports.School = School;
//# sourceMappingURL=School.js.map