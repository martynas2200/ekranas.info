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
var User_1 = require("../entity/User");
var crypto = require("crypto");
var Mail_1 = require("./Mail");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.login = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, username, password, userRepository, user, error_1, cdate, updated, hash;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, username = _a.username, password = _a.password;
                    if (!(username && password)) {
                        res.status(400).send({
                            success: false,
                            message: 'Nenurodyti prisijungimo duomenys'
                        });
                        return [2 /*return*/];
                    }
                    userRepository = typeorm_1.getRepository(User_1.User);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail({ where: [
                                { username: username },
                                { email: username }
                            ] })];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    res.status(401).send({
                        success: false,
                        message: 'Neteisingas vartotojo vardas'
                    });
                    return [2 /*return*/];
                case 4:
                    //Check if encrypted password match
                    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
                        res.status(401).send({
                            success: false,
                            message: 'Neteisingas vartotojo slaptažodis'
                        });
                        return [2 /*return*/];
                    }
                    cdate = new Date();
                    user.lastLogin = cdate;
                    updated = userRepository.save(user);
                    delete user.password;
                    delete user.createdAt;
                    delete user.updatedAt;
                    // delete user.lastLogin;
                    delete user.school.ip;
                    delete user.school.showTimetable;
                    delete user.school.timetableRepeat;
                    delete user.school.bellDuration;
                    delete user.school.slideDuration;
                    delete user.school.color1;
                    delete user.school.color2;
                    delete user.school.restart;
                    delete user.school.firstSemester;
                    delete user.school.secondSemester;
                    delete user.school.endSemesters;
                    delete user.school.turnOnTime;
                    delete user.school.turnOffTime;
                    delete user.school.version;
                    delete user.school.lastChange;
                    delete user.school.receiptTime;
                    req.session.user = user;
                    hash = crypto.createHmac("SHA256", "dae4ff4167cf7d4e15dd62c22816fe23e8ce6ff5").update(user.email).digest("hex");
                    res.send({
                        success: true,
                        message: 'Sėkmingai prisijungėte',
                        user: user,
                        hash: hash
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    AuthController.loggout = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            req.session.destroy(function (err) {
                // -
                if (!err)
                    res.status(200).send();
                else
                    res.status(400).send();
            });
            return [2 /*return*/];
        });
    }); };
    AuthController.UserData = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var hash;
        return __generator(this, function (_a) {
            if (req.session.user) {
                hash = crypto.createHmac("SHA256", "dae4ff4167cf7d4e15dd62c22816fe23e8ce6ff5").update(req.session.user.email).digest("hex");
                res.status(200).send({
                    success: true,
                    user: req.session.user,
                    hash: hash
                });
            }
            else
                res.status(401).send({});
            return [2 /*return*/];
        });
    }); };
    AuthController.changeUsername = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, _a, username, password, userRepository, user, id_1, usernameRegex, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.session.user.id;
                    _a = req.body, username = _a.username, password = _a.password;
                    if (!(username && password)) {
                        res.status(400).send('Nėra tinkamų duomenų');
                        return [2 /*return*/];
                    }
                    userRepository = typeorm_1.getRepository(User_1.User);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(id)];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    id_1 = _b.sent();
                    res.status(401).send('Duomenų bazės klaida!');
                    return [2 /*return*/];
                case 4:
                    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
                        res.status(401).send('Neteisingas slaptažodis');
                        return [2 /*return*/];
                    }
                    usernameRegex = /^[a-zA-Z0-9]+$/;
                    if (!usernameRegex.test(String(username))) {
                        res.status(400).send('Vartotojo vardas neteisingas, prašome naudoti tik raides ir skaičius be tarpų');
                        return [2 /*return*/];
                    }
                    else
                        user.username = username;
                    _b.label = 5;
                case 5:
                    _b.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, userRepository.save(user)];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 7:
                    error_2 = _b.sent();
                    res.status(400).send({
                        success: true,
                        message: 'Vartotojo vardo pakeisti nepavyko, nes ji užimtas',
                        error: error_2
                    });
                    return [2 /*return*/];
                case 8:
                    req.session.user.username = username;
                    res.status(200).send({
                        success: true,
                        message: 'Vartotojo vardas sėkmingai pakeistas'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    AuthController.changeEmail = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, _a, email, password, userRepository, user, id_2, re, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.session.user.id;
                    _a = req.body, email = _a.email, password = _a.password;
                    if (!(email && password)) {
                        res.status(400).send('Nėra tinkamų duomenų');
                        return [2 /*return*/];
                    }
                    userRepository = typeorm_1.getRepository(User_1.User);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(id)];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    id_2 = _b.sent();
                    res.status(500).send('Duomenų bazės klaida!');
                    return [2 /*return*/];
                case 4:
                    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
                        res.status(400).send('Neteisingas slaptažodis');
                        return [2 /*return*/];
                    }
                    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!re.test(String(email).toLowerCase())) {
                        res.status(400).send('Elektroninio pašto adresas netinkamas');
                        return [2 /*return*/];
                    }
                    else
                        user.email = email;
                    _b.label = 5;
                case 5:
                    _b.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, userRepository.save(user)];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 7:
                    error_3 = _b.sent();
                    res.status(400).send({
                        success: true,
                        message: 'Elektroninio pašto pakeisti nepavyko',
                        error: error_3
                    });
                    return [2 /*return*/];
                case 8:
                    req.session.user.email = email;
                    res.status(200).send({
                        success: true,
                        message: 'Elektroninio pašto adresas pakeistas'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    AuthController.forgotPassword = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var re, userRepository, user, error_4, mailer, info, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!re.test(String(req.body.email).toLowerCase())) {
                        res.status(400).send('Nurodytas neteisingas elektroninio pašto adresas');
                        return [2 /*return*/];
                    }
                    userRepository = typeorm_1.getRepository(User_1.User);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail({ where: { email: req.body.email } })];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    res.status(401).send({
                        success: false,
                        message: 'Nerastas vartotojas'
                    });
                    return [2 /*return*/];
                case 4:
                    user.clue = crypto.randomBytes(45).toString('hex');
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 8, , 9]);
                    return [4 /*yield*/, userRepository.save(user)];
                case 6:
                    _a.sent();
                    mailer = new Mail_1.Mail();
                    return [4 /*yield*/, mailer.send(user.email, 'Ekranas.info paskyros slaptažožio atstatymas', 'reset.pug', {
                            user: user,
                            school: req.session.user.school,
                            agent: req.headers['user-agent'],
                            ip: req.ip || req.ips
                        })];
                case 7:
                    info = _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    error_5 = _a.sent();
                    res.status(400).send({
                        success: true,
                        message: 'Nepavyko, išsaugoti naujų duomenų duomenų bazėje, parašyk pagalbai.',
                        error: error_5
                    });
                    return [2 /*return*/];
                case 9:
                    res.status(200).send({
                        success: true,
                        message: 'Sėkmingai pavyko išsiųsti slaptažodio atstatymo laišką'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    AuthController.changePassword = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, _a, oldPassword, newPassword, repeatedPassword, userRepository, user, id_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.session.user.id;
                    _a = req.body, oldPassword = _a.oldPassword, newPassword = _a.newPassword, repeatedPassword = _a.repeatedPassword;
                    if (!(oldPassword && newPassword && repeatedPassword)) {
                        res.status(400).send('Nėra tinkamų duomenų');
                        return [2 /*return*/];
                    }
                    userRepository = typeorm_1.getRepository(User_1.User);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(id)];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    id_3 = _b.sent();
                    res.status(500).send('Duomenų bazės klaida!');
                    return [3 /*break*/, 4];
                case 4:
                    //Check if old password matchs
                    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
                        res.status(401).send('Neteisingas dabartinis slaptažodis');
                        return [2 /*return*/];
                    }
                    //Check new password and repeated password matchs
                    if (newPassword !== repeatedPassword) {
                        res.status(400).send('Neteisingai pakartotas slaptažodis');
                        return [2 /*return*/];
                    }
                    //Validate password lenght
                    user.password = newPassword;
                    if (newPassword.length < 5) {
                        res.status(400).send('Per trumpas slaptažodis');
                        return [2 /*return*/];
                    }
                    // user.password = newPassword;
                    // const errors = await validate(user);
                    // if (errors.length > 0) {
                    //   res.status(400).send({
                    //      essage: 'Per trumpas slaptažodis',
                    //     errors
                    //   });
                    //   return;
                    // }
                    // Hash the new password and save
                    user.hashPassword();
                    userRepository.save(user);
                    res.status(200).send({
                        success: true,
                        message: 'Slaptažodis sėkmingai pakeistas'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return AuthController;
}());
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map