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
var class_validator_1 = require("class-validator");
var School_1 = require("./School");
var bcrypt = require("bcryptjs");
// `clue` varchar(105) COLLATE utf8mb4_unicode_ci NOT NULL,
// `deleted` tinyint(1) NOT NULL DEFAULT '0'
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.hashPassword = function () {
        this.password = bcrypt.hashSync(this.password, 8);
    };
    User.prototype.checkIfUnencryptedPasswordIsValid = function (unencryptedPassword) {
        if (!bcrypt.compareSync(unencryptedPassword, this.password)) {
            var hash = this.password.replace(/^\$2y(.+)$/i, '$2a$1');
            return bcrypt.compareSync(unencryptedPassword, hash);
        }
        else
            return bcrypt.compareSync(unencryptedPassword, this.password);
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 100
        }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 100
        }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            default: null
        }),
        class_validator_1.Length(4, 20),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return School_1.School; }, function (school) { return school.users; }, {
            eager: true
        }),
        __metadata("design:type", School_1.School)
    ], User.prototype, "school", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            length: 250,
            default: null
        }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            length: 120,
            default: null
        }),
        __metadata("design:type", String)
    ], User.prototype, "clue", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int'
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], User.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({
            default: null
        }),
        __metadata("design:type", Date)
    ], User.prototype, "lastLogin", void 0);
    User = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(["username"])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map