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
var School_1 = require("./School");
var Discipline_1 = require("./Discipline");
var Timetable = /** @class */ (function () {
    function Timetable() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Timetable.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Discipline_1.Discipline; }),
        __metadata("design:type", Discipline_1.Discipline)
    ], Timetable.prototype, "discipline", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            length: 50
        }),
        __metadata("design:type", String)
    ], Timetable.prototype, "className", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Timetable.prototype, "lessonNr", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Timetable.prototype, "weekDay", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Timetable.prototype, "semester", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return School_1.School; }),
        __metadata("design:type", School_1.School)
    ], Timetable.prototype, "school", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Timetable.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Timetable.prototype, "updatedAt", void 0);
    Timetable = __decorate([
        typeorm_1.Entity()
    ], Timetable);
    return Timetable;
}());
exports.Timetable = Timetable;
//# sourceMappingURL=Timetable.js.map