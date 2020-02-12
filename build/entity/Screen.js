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
var Screen = /** @class */ (function () {
    function Screen() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Screen.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            default: 'Pagrindinis'
        }),
        __metadata("design:type", String)
    ], Screen.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column("simple-json"),
        __metadata("design:type", Object)
    ], Screen.prototype, "settings", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return School_1.School; }, {
            eager: true
        }),
        __metadata("design:type", School_1.School)
    ], Screen.prototype, "school", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            length: 200,
            default: null
        }),
        __metadata("design:type", String)
    ], Screen.prototype, "clue", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Screen.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Screen.prototype, "updatedAt", void 0);
    Screen = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(["clue"])
    ], Screen);
    return Screen;
}());
exports.Screen = Screen;
//# sourceMappingURL=Screen.js.map