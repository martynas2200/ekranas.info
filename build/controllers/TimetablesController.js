"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var Timetable_1 = require("../entity/Timetable");
var Discipline_1 = require("../entity/Discipline");
var index_1 = require("../index");
var TimetablesController = /** @class */ (function () {
    function TimetablesController() {
    }
    var _a;
    _a = TimetablesController;
    TimetablesController.getClasses = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var rawRows, classes_1, error_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, index_1.dataSource.getRepository(Timetable_1.Timetable).query('SELECT  `timetable`.`className` FROM `timetable` WHERE `timetable`.`schoolId` = ' + req.session.user.school.id + ' GROUP BY `className`;')];
                case 1:
                    rawRows = _b.sent();
                    classes_1 = [];
                    rawRows.forEach(function (row) {
                        classes_1.push(row.className);
                    });
                    // delete rows;
                    res.status(200).send({
                        success: true,
                        // rows,
                        classes: classes_1
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    res.status(400).send({
                        success: false,
                        error: error_1
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    TimetablesController.getByDayAndSemester = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var day, semester, classes, rawRows, error_2, rows, error_3;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    day = parseInt(req.params.day);
                    semester = parseInt(req.params.semester);
                    if (!day || !semester) {
                        res.status(400).send('Netinkami parametrai!');
                        return [2 /*return*/];
                    }
                    classes = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, index_1.dataSource.getRepository(Timetable_1.Timetable).query('SELECT  `timetable`.`className` FROM `timetable` WHERE `timetable`.`schoolId` = ' + req.session.user.school.id + ' GROUP BY `className`;')];
                case 2:
                    rawRows = _b.sent();
                    rawRows.forEach(function (row) {
                        classes.push(row.className);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    console.log(error_2);
                    return [3 /*break*/, 4];
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, index_1.dataSource.getRepository(Timetable_1.Timetable).query('SELECT `timetable`.`disciplineId`, GROUP_CONCAT(DISTINCT CONCAT(`lessonNr`, ":!*!:", `className`) ORDER BY `lessonNr` SEPARATOR "@^n^@") AS `variants`, `discipline`.`room`, `discipline`.`teacher`, `discipline`.`name` FROM `timetable` LEFT JOIN `discipline` ON `timetable`.`disciplineId` = `discipline`.`id` WHERE `timetable`.`weekDay` = ' + day + ' AND `timetable`.`semester` = ' + semester + ' AND `timetable`.`schoolId` = ' + req.session.user.school.id + ' GROUP BY `disciplineId`')];
                case 5:
                    rows = _b.sent();
                    rows.forEach(function (discipline) {
                        discipline.variants = discipline.variants.split('@^n^@');
                        discipline.lessons = {};
                        discipline.variants.forEach(function (string) {
                            var pair = string.split(':!*!:');
                            discipline.lessons[pair[0]] = pair[1];
                        });
                        delete discipline.variants;
                    });
                    // .createQueryBuilder("timetable")
                    // .leftJoinAndSelect("timetable.discipline", "discipline", "discipline.id = timetable.disciplineId")
                    // .addSelect('GROUP_CONCAT(CONCAT(timetable.lessonNr, ":!*!:", timetable.className) ORDER BY timetable.lessonNr SEPARATOR "@^n^@") AS lessons')
                    // .addSelect('discipline.room AS room')
                    // .where("timetable.weekDay = :day", { day: day })
                    // .groupBy("timetable.disciplineId")
                    // .getMany();
                    res.status(200).send({
                        success: true,
                        rows: rows,
                        classes: classes
                    });
                    return [3 /*break*/, 7];
                case 6:
                    error_3 = _b.sent();
                    res.status(400).send({
                        success: false,
                        error: error_3
                    });
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    TimetablesController.update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id;
        return __generator(_a, function (_b) {
            id = parseInt(req.params.id);
            if (!id) {
                res.status(400).send({
                    success: false,
                    message: 'Netinkamas id!'
                });
                return [2 /*return*/];
            }
            if (!TimetablesController.deleteQuery(id, req.session.user.school.id, req.body.semester, req.body.weekDay)) {
                res.status(400).send('Nepavyko išvalyti senų duomenų!');
                return [2 /*return*/];
            }
            else {
                // Po patikrinimo
                TimetablesController.create(req, res);
            }
            return [2 /*return*/];
        });
    }); };
    TimetablesController.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, disciplineId, lessons, _c, weekDay, semester, disciplinesRepository, discipline, error_4, newRows, lessonNr, a, error_5;
        return __generator(_a, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = req.body.row, disciplineId = _b.disciplineId, lessons = _b.lessons;
                    _c = req.body, weekDay = _c.weekDay, semester = _c.semester;
                    if (!disciplineId || !lessons || !semester || !weekDay) {
                        res.status(400).send('Trūksta duomenų, galbūt nepasirinkta disciplina!');
                        return [2 /*return*/];
                    }
                    if (typeof disciplineId !== 'number' ||
                        typeof semester !== 'number' ||
                        typeof weekDay !== 'number' ||
                        typeof lessons !== 'object' || weekDay > 7) {
                        res.status(400).send('Netinkami duomenys!');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, index_1.dataSource.getRepository(Discipline_1.Discipline)];
                case 1:
                    disciplinesRepository = _d.sent();
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, disciplinesRepository.findOneOrFail({
                            where: {
                                school: req.session.user.school,
                                id: disciplineId
                            }
                        })];
                case 3:
                    discipline = _d.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_4 = _d.sent();
                    // console.log(error);
                    res.status(400).send('Nepavyko išsaugoti, kadangi disciplina nerasta');
                    return [2 /*return*/];
                case 5:
                    newRows = [];
                    for (lessonNr in lessons) {
                        if (!parseInt(lessonNr))
                            continue;
                        if (parseInt(lessonNr) > 8 || parseInt(lessonNr) < 1)
                            continue;
                        if (!lessons.hasOwnProperty(lessonNr))
                            continue;
                        if (!lessons[lessonNr])
                            continue;
                        newRows.push({
                            discipline: { id: disciplineId },
                            className: lessons[lessonNr],
                            lessonNr: parseInt(lessonNr),
                            weekDay: weekDay,
                            semester: semester,
                            school: { id: req.session.user.school.id }
                        });
                    }
                    if (newRows.length == 0) {
                        res.status(400).send('Klaida! Nėra ką išsaugoti!');
                        return [2 /*return*/];
                    }
                    _d.label = 6;
                case 6:
                    _d.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, index_1.dataSource.getRepository(Timetable_1.Timetable)
                            .createQueryBuilder()
                            .insert()
                            .into(Timetable_1.Timetable)
                            .values(newRows)
                            .execute()];
                case 7:
                    a = _d.sent();
                    res.status(200).send({
                        success: true,
                        message: 'Sėkmingai išsaugota',
                        a: a
                    });
                    return [2 /*return*/];
                case 8:
                    error_5 = _d.sent();
                    res.status(400).send('Nepavyko išsaugoti!');
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    TimetablesController.delete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, weekDay, semester;
        return __generator(_a, function (_b) {
            id = parseInt(req.params.id);
            weekDay = parseInt(req.params.weekDay);
            semester = parseInt(req.params.semester);
            if (!id || !weekDay || !semester) {
                res.status(400).send('Netinkami parametrai!');
                return [2 /*return*/];
            }
            if (TimetablesController.deleteQuery(id, req.session.user.school.id, semester, weekDay)) {
                res.status(200).send({
                    success: true,
                    message: 'Sėkmingai ištrinta'
                });
            }
            else {
                res.status(400).send('Nepavyko ištrinti!');
            }
            return [2 /*return*/];
        });
    }); };
    // {"success":true,"rows":
    // {"disciplineId":13,"room":"30","teacher":"Rima Lukoševičienė","name":"Kūno kultūra","lessons":{"1":"7","2":"IIG","3":"5","5":"IVG","6":"IIG"}},
    //{"disciplineId":16,"room":"7","teacher":"Laimutė Žakienė","name":"Chemija","lessons":{"1":"8","2":"IIIG","3":"9","4":"6","5":"9"}},{"disciplineId":20,"room":"24 | 25 | 28","teacher":"Eglė Pangonienė","name":"Matematika","lessons":{"2":"IVG","3":"8","5":"5","6":"6","7":"IIG"}},{"disciplineId":25,"room":"11","teacher":"Kristina Palubinskienė","name":"Technologijos","lessons":{"1":"IIIG"}},{"disciplineId":26,"room":"12","teacher":"Algimantas Avulis","name":"Technologijos","lessons":{"4":"7"}}]}
    TimetablesController.deleteQuery = function (id, school, semester, weekDay) { return __awaiter(void 0, void 0, void 0, function () {
        var error_6;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, index_1.dataSource.getRepository(Timetable_1.Timetable)
                            .createQueryBuilder()
                            .delete()
                            .where("disciplineId = :id", { id: id })
                            .andWhere("schoolId = :school", { school: school })
                            .andWhere("weekDay = :weekDay", { weekDay: weekDay })
                            .andWhere("semester = :semester", { semester: semester })
                            .execute()];
                case 1:
                    _b.sent();
                    return [2 /*return*/, true];
                case 2:
                    error_6 = _b.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return TimetablesController;
}());
;
exports.default = TimetablesController;
//# sourceMappingURL=TimetablesController.js.map