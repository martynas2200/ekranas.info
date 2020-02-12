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
var School_1 = require("../entity/School");
var Time_1 = require("../entity/Time");
var Screen_1 = require("../entity/Screen");
var crypto = require("crypto");
var Timetable_1 = require("../entity/Timetable");
var ScreenController_1 = require("./ScreenController");
// import { validate } from "class-validator";
var SettingsController = /** @class */ (function () {
    function SettingsController() {
    }
    SettingsController.getTimetableSettings = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var school, currentSemester, numberOfSavedRows, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, typeorm_1.getRepository(School_1.School).findOneOrFail(req.session.user.school.id, {
                            select: ["showTimetable", "firstSemester", "secondSemester", "endSemesters"]
                        })];
                case 1:
                    school = _a.sent();
                    currentSemester = ScreenController_1.getCurrentSemester(school);
                    numberOfSavedRows = 0;
                    if (!(currentSemester == 2 || currentSemester == 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, typeorm_1.getRepository(Timetable_1.Timetable).count({
                            school: { id: req.session.user.school.id },
                            semester: currentSemester
                        })];
                case 2:
                    numberOfSavedRows = _a.sent();
                    _a.label = 3;
                case 3:
                    res.status(200).send({
                        success: true,
                        currentSemester: currentSemester,
                        numberOfSavedRows: numberOfSavedRows,
                        settings: school
                    });
                    return [2 /*return*/];
                case 4:
                    error_1 = _a.sent();
                    res.status(400).send('Nepavyko gauti tvarkaraščio nustatymų');
                    return [2 /*return*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    SettingsController.updateTimetableSettings = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, showTimetable, firstSemester, secondSemester, endSemesters, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body.settings, showTimetable = _a.showTimetable, firstSemester = _a.firstSemester, secondSemester = _a.secondSemester, endSemesters = _a.endSemesters;
                    // Tikrinti showtimetable
                    if (!firstSemester || !secondSemester || !endSemesters) {
                        res.status(400).send('Nėra tinkamų duomenų');
                        return [2 /*return*/];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, typeorm_1.getRepository(School_1.School).save({
                            id: req.session.user.school.id,
                            showTimetable: (showTimetable == "true"),
                            firstSemester: firstSemester,
                            secondSemester: secondSemester,
                            endSemesters: endSemesters
                        })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    res.status(400).send({
                        success: true,
                        message: 'Tvarkaraščio nustatymų nepavyko išsaugoti',
                        error: error_2
                    });
                    return [2 /*return*/];
                case 4:
                    res.status(200).send({
                        success: true,
                        message: 'Tvarkaraščio nustatymai sėkmingai išsaugoti'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    SettingsController.getTimes = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var times;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.getRepository(Time_1.Time).find({
                        where: { school: { id: req.session.user.school.id } }
                    })];
                case 1:
                    times = _a.sent();
                    res.status(200).send({
                        times: times
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    SettingsController.deleteTime = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    if (!id) {
                        res.status(400).send('Netinkamas id!');
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, typeorm_1.getRepository(Time_1.Time).delete(id)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    res.status(400).send('Pamokų laiko nepavyko ištrinti!');
                    return [2 /*return*/];
                case 4:
                    res.status(200).send({
                        success: true,
                        message: 'Pamokų laikas sėkmingai ištrintas!'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    SettingsController.createTime = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, times, name, newTime, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, times = _a.times, name = _a.name;
                    if (!(times && name) || times.length < 2) {
                        res.status(400).send('Trūksta duomenų');
                        return [2 /*return*/];
                    }
                    times.forEach(function (time) {
                        if (typeof time.h !== 'number' || typeof time.m !== 'number' || typeof time.lesson !== 'boolean' || typeof time.lessonN !== 'number') {
                            res.status(400).send('Nėra tinkamų duomenų tipų');
                            return;
                        }
                        if (Object.keys(time).length !== 4) {
                            res.status(400).send('Nėra tinkamų duomenų');
                            return;
                        }
                    });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, typeorm_1.getRepository(Time_1.Time).save({
                            name: name,
                            times: times,
                            school: req.session.user.school
                        })];
                case 2:
                    newTime = _b.sent();
                    res.status(200).send({
                        success: true,
                        message: 'Naujas pamokų laikas sėkmingai išsaugotas',
                        time: newTime
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    console.log(error_4);
                    res.status(400).send('Pamokų laiko nepavyko išsaugoti, parašyk pagalbai');
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    SettingsController.activateTime = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    if (!id) {
                        res.status(400).send('Netinkamas id!');
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, typeorm_1.getRepository(Time_1.Time)
                            .createQueryBuilder()
                            .update(Time_1.Time)
                            .set({
                            active: function () { return "CASE WHEN `id` = " + id + " THEN 1 ELSE 0 END"; }
                        })
                            .where("schoolId = :id", { id: req.session.user.school.id })
                            .execute()];
                case 2:
                    _a.sent();
                    res.status(200).send({
                        success: true,
                        message: 'Pamokų laikas sėkmingai nustatytas numatytu'
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.log(error_5);
                    res.status(400).send('Pamokų laiko nepavyko nustatyti numatytu, parašyk pagalbai');
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    SettingsController.getSettings = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var settings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.getRepository(School_1.School).findOne({
                        where: { id: req.session.user.school.id },
                        select: ['ip', 'turnOnTime', 'turnOffTime']
                    })];
                case 1:
                    settings = _a.sent();
                    settings.turnOffTime = settings.turnOffTime.substr(0, 5);
                    settings.turnOnTime = settings.turnOnTime.substr(0, 5);
                    res.status(200).send({
                        settings: settings
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    SettingsController.updateSettings = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, ip, turnOnTime, turnOffTime, error_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, ip = _a.ip, turnOnTime = _a.turnOnTime, turnOffTime = _a.turnOffTime;
                    if (!ip || !turnOnTime || !turnOffTime) {
                        res.status(400).send('Nėra tinkamų duomenų');
                        return [2 /*return*/];
                    }
                    if (!(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip))) {
                        res.status(400).send('Neteisingas IP adresas');
                        return [2 /*return*/];
                    }
                    if (!(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(turnOnTime))) {
                        res.status(400).send('Neteisingas Laikas');
                        return [2 /*return*/];
                    }
                    if (!(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(turnOffTime))) {
                        res.status(400).send('Neteisingas Laikas');
                        return [2 /*return*/];
                    }
                    if (parseInt(turnOffTime.split(':')[0], 10) * 60 +
                        parseInt(turnOffTime.split(':')[1], 10) <
                        parseInt(turnOnTime.split(':')[0], 10) * 60 +
                            parseInt(turnOnTime.split(':')[1], 10)) {
                        res.status(400).send('Išjungimo laikas didesnis už įjungimo laikas');
                        return [2 /*return*/];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, typeorm_1.getRepository(School_1.School).save({
                            id: req.session.user.school.id,
                            ip: ip,
                            turnOnTime: turnOnTime,
                            turnOffTime: turnOffTime
                        })];
                case 2:
                    _b.sent();
                    res.status(200).send({
                        success: true,
                        message: 'Nustatymai buvo sėkmingai atnaujinti'
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _b.sent();
                    console.log(error_6);
                    res.status(400).send('Nustaymų nepavyko atnaujinti, parašyk pagalbai');
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    SettingsController.getScreens = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var screens;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.getRepository(Screen_1.Screen).find({
                        where: { school: { id: req.session.user.school.id } }
                    })];
                case 1:
                    screens = _a.sent();
                    res.status(200).send({
                        screens: screens
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    SettingsController.createScreen = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, name, settings, clue, newScreen, error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body.screen, name = _a.name, settings = _a.settings;
                    if (!(name && settings)) {
                        res.status(400).send('Trūksta duomenų!');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, new Promise(function (done) { return setTimeout(done, 5000); })];
                case 1:
                    _b.sent();
                    clue = crypto.randomBytes(90).toString('hex');
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, typeorm_1.getRepository(Screen_1.Screen).save({
                            name: name,
                            settings: settings,
                            clue: clue,
                            school: req.session.user.school
                        })];
                case 3:
                    newScreen = _b.sent();
                    res.status(200).send({
                        success: true,
                        message: 'Sėkmingai sukurtas ekranas',
                        screen: newScreen
                    });
                    return [3 /*break*/, 5];
                case 4:
                    error_7 = _b.sent();
                    console.log(error_7);
                    res.status(400).send('Nepavyko sukurti ekrano, parašyk pagalbai');
                    return [2 /*return*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    SettingsController.deleteScreen = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, screenRepository, error_8, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    if (!id) {
                        res.status(400).send('Netinkamas id!');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, typeorm_1.getRepository(Screen_1.Screen)];
                case 1:
                    screenRepository = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, screenRepository.findOneOrFail({
                            where: {
                                school: req.session.user.school,
                                id: id
                            }
                        })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_8 = _a.sent();
                    res.status(404).send({
                        success: false,
                        message: 'Ekranas nerastas'
                    });
                    return [2 /*return*/];
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, screenRepository.delete(id)];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    error_9 = _a.sent();
                    res.status(400).send('Pamokų laiko nepavyko ištrinti!');
                    return [2 /*return*/];
                case 8:
                    res.status(200).send({
                        success: true,
                        message: 'Pamokų laikas sėkmingai ištrintas!'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    SettingsController.updateScreenSettings = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, screenRepository, error_10, _a, name, settings, newScreen, error_11;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = parseInt(req.params.id);
                    return [4 /*yield*/, typeorm_1.getRepository(Screen_1.Screen)];
                case 1:
                    screenRepository = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, screenRepository.findOneOrFail({
                            where: {
                                school: req.session.user.school,
                                id: id
                            }
                        })];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_10 = _b.sent();
                    res.status(404).send({
                        success: false,
                        message: 'Ekranas nerastas'
                    });
                    return [2 /*return*/];
                case 5:
                    _a = req.body.screen, name = _a.name, settings = _a.settings;
                    if (!(name && settings)) {
                        res.status(400).send('Trūksta duomenų!');
                        return [2 /*return*/];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, typeorm_1.getRepository(Screen_1.Screen).save({
                            id: id,
                            name: name,
                            settings: settings
                        })];
                case 7:
                    newScreen = _b.sent();
                    res.status(200).send({
                        success: true,
                        message: 'Sėkmingai atnaujintos ekrano parinktys',
                        screen: newScreen
                    });
                    return [3 /*break*/, 9];
                case 8:
                    error_11 = _b.sent();
                    console.log(error_11);
                    res.status(400).send('Nepavyko atnaujinti ekrano pasirinkčių, parašyk pagalbai');
                    return [2 /*return*/];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    SettingsController.updateScreenKey = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, clue, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    clue = crypto.randomBytes(90).toString('hex');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, typeorm_1.getRepository(Screen_1.Screen)
                            .createQueryBuilder()
                            .update(Screen_1.Screen)
                            .set({
                            clue: clue
                        })
                            .where("schoolId = :school", { school: req.session.user.school.id })
                            .andWhere("id = :id", { id: id })
                            .execute()];
                case 2:
                    _a.sent();
                    res.status(200).send({
                        success: true,
                        message: 'Sėkmingai sukurtas naujas raktas',
                        clue: clue
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_12 = _a.sent();
                    console.log(error_12);
                    res.status(400).send('Nepavyko sukurti naujo rakto, parašyk pagalbai');
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return SettingsController;
}());
;
exports.default = SettingsController;
//# sourceMappingURL=SettingsController.js.map