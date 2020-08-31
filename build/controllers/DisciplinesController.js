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
var typeorm_1 = require("typeorm");
var Discipline_1 = require("../entity/Discipline");
var DisciplinesController = /** @class */ (function () {
    function DisciplinesController() {
    }
    DisciplinesController.getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var disciplinesRepository, disciplines;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.getRepository(Discipline_1.Discipline)];
                case 1:
                    disciplinesRepository = _a.sent();
                    return [4 /*yield*/, disciplinesRepository.find({
                            where: {
                                school: req.session.user.school
                            }
                        })];
                case 2:
                    disciplines = _a.sent();
                    //Send the disciplines object
                    res.send({
                        disciplines: disciplines
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    DisciplinesController.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, teacher, room, name, disciplinesRepository, discipline, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, teacher = _a.teacher, room = _a.room, name = _a.name;
                    if (!(teacher && room && name)) {
                        res.status(400).send('Nėra tinkamų duomenų');
                        return [2 /*return*/];
                    }
                    if (teacher.length < 5) {
                        res.status(400).send('Per trumpas mokytojo(s) vardas, pavardė');
                        return [2 /*return*/];
                    }
                    if (name.length < 4) {
                        res.status(400).send('Per trumpas dalyko pavadinimas');
                        return [2 /*return*/];
                    }
                    disciplinesRepository = typeorm_1.getRepository(Discipline_1.Discipline);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, disciplinesRepository.save({
                            school: req.session.user.school,
                            teacher: teacher,
                            room: room,
                            name: name
                        })];
                case 2:
                    discipline = _b.sent();
                    delete discipline.school;
                    res.status(200).send({
                        success: true,
                        message: 'Disciplina sėkmingai išsaugota',
                        discipline: discipline
                    });
                    return [2 /*return*/];
                case 3:
                    error_1 = _b.sent();
                    res.status(500).send('Nepavyko išsaugoti naujos disciplinos!');
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    DisciplinesController.update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, teacher, room, name, id, disciplinesRepository, Checkdiscipline, error_2, discipline, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!req.body.hasOwnProperty('discipline')) {
                        res.status(400).send('Serveris negavo duomenų!');
                        return [2 /*return*/];
                    }
                    if (!req.body.discipline.hasOwnProperty('id') ||
                        !req.body.discipline.hasOwnProperty('teacher') ||
                        !req.body.discipline.hasOwnProperty('name') ||
                        !req.body.discipline.hasOwnProperty('room')) {
                        res.status(400).send('Serveriui trūksta duomenų!');
                        return [2 /*return*/];
                    }
                    _a = req.body.discipline, teacher = _a.teacher, room = _a.room, name = _a.name;
                    id = parseInt(req.body.discipline.id);
                    if (!(teacher && room && name && id)) {
                        res.status(400).send('Nėra tinkamų duomenų');
                        return [2 /*return*/];
                    }
                    disciplinesRepository = typeorm_1.getRepository(Discipline_1.Discipline);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, disciplinesRepository.findOneOrFail({
                            where: {
                                school: req.session.user.school,
                                id: id
                            }
                        })];
                case 2:
                    Checkdiscipline = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    res.status(404).send({
                        success: false,
                        message: 'Disciplina nerasta'
                    });
                    return [2 /*return*/];
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, disciplinesRepository.save({
                            teacher: teacher, room: room, name: name, id: id
                        })];
                case 5:
                    discipline = _b.sent();
                    res.status(200).send({
                        success: true,
                        message: 'Disciplina sėkmingai atnaujinta',
                        discipline: discipline
                    });
                    return [2 /*return*/];
                case 6:
                    error_3 = _b.sent();
                    res.status(500).send('Nepavyko atnaujinti disciplinos!');
                    return [2 /*return*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    DisciplinesController.delete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, disciplinesRepository, Checkdiscipline, error_4, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    if (!id) {
                        res.status(400).send('Netinkamas id!');
                        return [2 /*return*/];
                    }
                    disciplinesRepository = typeorm_1.getRepository(Discipline_1.Discipline);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, disciplinesRepository.findOneOrFail({
                            where: {
                                school: req.session.user.school,
                                id: id
                            }
                        })];
                case 2:
                    Checkdiscipline = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    res.status(404).send({
                        success: false,
                        message: 'Disciplina nerasta'
                    });
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, disciplinesRepository.delete(id)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_5 = _a.sent();
                    res.status(400).send('Disciplinos nepavyko ištrinti!');
                    return [2 /*return*/];
                case 7:
                    res.status(200).send({
                        success: true,
                        message: 'Disciplina sėkmingai ištrinta!'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return DisciplinesController;
}());
;
exports.default = DisciplinesController;
//# sourceMappingURL=DisciplinesController.js.map