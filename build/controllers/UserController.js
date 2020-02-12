"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var crypto = require("crypto");
var User_1 = require("../entity/User");
var Mail_1 = require("./Mail");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.listAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var userRepository, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userRepository = typeorm_1.getRepository(User_1.User);
                    return [4 /*yield*/, userRepository.find({
                            select: ["id", "username", "role", "name", "email", "lastLogin"],
                            where: { school: { id: req.session.user.school.id } } // We dont want to send the passwords on response
                        })];
                case 1:
                    users = _a.sent();
                    // Send the users object
                    res.send({ users: users });
                    return [2 /*return*/];
            }
        });
    }); };
    UserController.saveOneByClue = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var userRepository, user, error_1, _a, password, repeatedPassword, error_2, usernameRegex, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // Get the clue from the url
                    if (!req.params.clue || req.params.clue == '') {
                        res.status(400).send('Netinkami duomenys');
                        return [2 /*return*/];
                    }
                    userRepository = typeorm_1.getRepository(User_1.User);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail({
                            where: { clue: req.params.clue }
                        })];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    res.status(404).send("Atsiprašome, bet nuoroda neteisinga, parašyk dešinėje žinutę pagalbai!");
                    return [3 /*break*/, 4];
                case 4:
                    _a = req.body, password = _a.password, repeatedPassword = _a.repeatedPassword;
                    if (!(password && repeatedPassword)) {
                        res.status(400).send('Nėra tinkamų duomenų!');
                        return [2 /*return*/];
                    }
                    //Check new password and repeated password matchs
                    if (password !== repeatedPassword) {
                        res.status(400).send('Neteisingai pakartotas slaptažodis');
                        return [2 /*return*/];
                    }
                    //Validate password lenght
                    if (password.length < 5) {
                        res.status(400).send('Per trumpas slaptažodis');
                        return [2 /*return*/];
                    }
                    if (!user.password) return [3 /*break*/, 9];
                    // Password reset
                    user.password = password;
                    user.clue = null;
                    user.hashPassword();
                    _b.label = 5;
                case 5:
                    _b.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, userRepository.save(user)];
                case 6:
                    _b.sent();
                    // Remove details from response
                    delete user.password;
                    delete user.school;
                    res.status(200).send({
                        user: user,
                        success: true,
                        message: 'Sėkmingai slaptažodis buvo pakeistas!'
                    });
                    return [2 /*return*/];
                case 7:
                    error_2 = _b.sent();
                    res.status(400).send('Nepavyko atnaujinti slaptažodžio! Parašyk pagalbai!');
                    return [2 /*return*/];
                case 8: return [3 /*break*/, 13];
                case 9:
                    // Account activation
                    user.password = password;
                    user.clue = null;
                    user.hashPassword();
                    if (req.body.username) {
                        usernameRegex = /^[a-zA-Z0-9]+$/;
                        if (!usernameRegex.test(String(req.body.username))) {
                            res.status(400).send('Vartotojo vardas neteisingas, prašome naudoti tik raides ir skaičius be tarpų');
                            return [2 /*return*/];
                        }
                        user.username = req.body.username;
                    }
                    _b.label = 10;
                case 10:
                    _b.trys.push([10, 12, , 13]);
                    return [4 /*yield*/, userRepository.save(user)];
                case 11:
                    _b.sent();
                    // Remove details from response
                    delete user.password;
                    delete user.school;
                    res.status(200).send({
                        user: user,
                        success: true,
                        message: 'Sėkmingai paskyra buvo aktyvuota!'
                    });
                    return [2 /*return*/];
                case 12:
                    error_3 = _b.sent();
                    res.status(400).send('Atsiprašome, bet vartotojo vardas užimtas!');
                    return [2 /*return*/];
                case 13: return [2 /*return*/];
            }
        });
    }); };
    UserController.getOneByClue = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var userRepository, user, school, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Get the clue from the url
                    if (!req.params.clue) {
                        res.status(400).send('Netinkami duomenys');
                        return [2 /*return*/];
                    }
                    userRepository = typeorm_1.getRepository(User_1.User);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail({
                            where: { clue: req.params.clue }
                        })];
                case 2:
                    user = _a.sent();
                    school = {
                        name: user.school.name,
                        logo: user.school.logo
                    };
                    delete user.school;
                    user.school = school;
                    // Activation of account
                    if (!user.password) {
                        delete user.password;
                        res.status(200).send({
                            user: user,
                            passwordReset: false
                        });
                    }
                    else {
                        // Password reset
                        // Remove password hash from response
                        delete user.password;
                        res.status(200).send({
                            user: user,
                            passwordReset: true
                        });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    res.status(404).send("Atsiprašome, bet nuoroda neteisinga!");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    UserController.newUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, name, email, role, re, clue, userRepository, mailer, info, user, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, email = _a.email, role = _a.role;
                    if (!name || !email || role === null || role === undefined) {
                        res.status(400).send('Netinkami duomenys');
                        return [2 /*return*/];
                    }
                    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!re.test(String(email).toLowerCase())) {
                        res.status(400).send('Elektroninio pašto adresas netinkamas');
                        return [2 /*return*/];
                    }
                    clue = crypto.randomBytes(45).toString('hex');
                    userRepository = typeorm_1.getRepository(User_1.User);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    mailer = new Mail_1.Mail();
                    return [4 /*yield*/, mailer.send(email, 'Ekranas.info paskyros kūrimas', 'activation.pug', {
                            clue: clue,
                            user: {
                                name: name,
                                email: email
                            },
                            sender: req.session.user,
                            school: req.session.user.school
                        })];
                case 2:
                    info = _b.sent();
                    return [4 /*yield*/, userRepository.save({
                            name: name,
                            email: email,
                            role: parseInt(role),
                            clue: clue,
                            school: { id: req.session.user.school.id }
                        })];
                case 3:
                    user = _b.sent();
                    //If all ok, send 201 response
                    res.status(201).send({
                        success: true,
                        message: 'Sėkmingai sukurtas naujas vartotojas',
                        user: user,
                        info: info
                    });
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _b.sent();
                    console.log(e_1);
                    res.status(409).send('Nepavyko išsaugoti naujo vartotojo');
                    return [2 /*return*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    UserController.editUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, name, role, id, userRepository, user, error_5, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body.user, name = _a.name, role = _a.role;
                    if (!name || !parseInt(req.params.id) || role === null || role === undefined) {
                        res.status(400).send('Netinkami duomenys');
                        return [2 /*return*/];
                    }
                    id = parseInt(req.params.id);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(id)];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _b.sent();
                    //If not found, send a 404 response
                    res.status(404).send("Vartotojas nerastas");
                    return [2 /*return*/];
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, userRepository.save({
                            id: id,
                            name: name,
                            role: parseInt(role)
                        })];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 6:
                    e_2 = _b.sent();
                    res.status(409).send("Nepavyko išsaugoti.");
                    return [2 /*return*/];
                case 7:
                    //After all send a 204 (no content, but accepted) response
                    res.status(200).send({
                        message: 'Vartotojo duomenys sėkmingai atnaujinti'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    UserController.deleteUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, userRepository, user, error_6, mailer, info, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    userRepository = typeorm_1.getRepository(User_1.User);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(id)];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    res.status(404).send("Vartotojas nerastas");
                    return [2 /*return*/];
                case 4:
                    userRepository.delete(id);
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    mailer = new Mail_1.Mail();
                    return [4 /*yield*/, mailer.send(user.email, 'Ekranas.info paskyros kūrimas', 'deleted-account.pug', {
                            user: {
                                name: user.name,
                                email: user.email
                            },
                            sender: req.session.user,
                            school: req.session.user.school
                        })];
                case 6:
                    info = _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    e_3 = _a.sent();
                    return [3 /*break*/, 8];
                case 8:
                    //After all send a 204 (no content, but accepted) response
                    res.status(204).send();
                    return [2 /*return*/];
            }
        });
    }); };
    return UserController;
}());
;
exports.default = UserController;
//# sourceMappingURL=UserController.js.map