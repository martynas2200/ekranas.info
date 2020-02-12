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
var Image_1 = require("./Image");
var School_1 = require("./School");
var User_1 = require("./User");
var Notification = /** @class */ (function () {
    function Notification() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Notification.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'date',
            default: null
        }),
        __metadata("design:type", Date)
    ], Notification.prototype, "date1", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'date',
            default: null
        }),
        __metadata("design:type", Date)
    ], Notification.prototype, "date2", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Notification.prototype, "showBefore", void 0);
    __decorate([
        typeorm_1.Column({
            default: true
        }),
        __metadata("design:type", Boolean)
    ], Notification.prototype, "visibility", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Notification.prototype, "repeatTimes", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Notification.prototype, "displayAuthor", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Notification.prototype, "important", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            default: 'note'
        }),
        __metadata("design:type", String)
    ], Notification.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'text',
            default: null
        }),
        __metadata("design:type", String)
    ], Notification.prototype, "note", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            default: null
        }),
        __metadata("design:type", String)
    ], Notification.prototype, "author", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return School_1.School; }),
        __metadata("design:type", School_1.School)
    ], Notification.prototype, "school", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }),
        __metadata("design:type", User_1.User)
    ], Notification.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Notification.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'date',
            default: null
        }),
        __metadata("design:type", Date)
    ], Notification.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Image_1.Image; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Notification.prototype, "images", void 0);
    Notification = __decorate([
        typeorm_1.Entity()
    ], Notification);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map