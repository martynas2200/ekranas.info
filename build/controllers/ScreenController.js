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
var xmlToJson = require("xml-to-json-stream");
var parser = xmlToJson({ attributeMode: false });
var Screen_1 = require("../entity/Screen");
var Timetable_1 = require("../entity/Timetable");
var Notification_1 = require("../entity/Notification");
var date_fns_1 = require("date-fns");
var Time_1 = require("../entity/Time");
var School_1 = require("../entity/School");
// TypeORM query operators polyfills
var EDateType;
(function (EDateType) {
    EDateType["Date"] = "yyyy-MM-dd";
    EDateType["Datetime"] = "yyyy-MM-dd HH:MM:SS";
})(EDateType || (EDateType = {}));
exports.EDateType = EDateType;
;
var MoreThanDate = function (date, type) { return typeorm_1.MoreThan(date_fns_1.format(date, type)); };
exports.MoreThanDate = MoreThanDate;
var MoreThanOrEqualDate = function (date, type) { return typeorm_1.MoreThanOrEqual(date_fns_1.format(date, type)); };
exports.MoreThanOrEqualDate = MoreThanOrEqualDate;
var LessThanDate = function (date, type) { return typeorm_1.LessThan(date_fns_1.format(date, type)); };
exports.LessThanDate = LessThanDate;
var LessThanOrEqualDate = function (date, type) { return typeorm_1.LessThanOrEqual(date_fns_1.format(date, type)); };
exports.LessThanOrEqualDate = LessThanOrEqualDate;
exports.getCurrentSemester = function (school) {
    if (new Date(school.secondSemester).getTime() <= new Date().getTime() && new Date().getTime() <= new Date(school.endSemesters).getTime())
        return 2;
    else if (new Date(school.firstSemester).getTime() <= new Date().getTime() && new Date().getTime() <= new Date(school.secondSemester).getTime())
        return 1;
    else
        return 0;
};
exports.getScreenByKey = function (clue) { return __awaiter(_this, void 0, void 0, function () {
    var screenReposity, screen, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Screen_1.Screen)];
            case 1:
                screenReposity = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, screenReposity.findOneOrFail({
                        where: { clue: clue }
                    })];
            case 3:
                screen = _a.sent();
                return [2 /*return*/, screen];
            case 4:
                error_1 = _a.sent();
                return [2 /*return*/, false];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getContentByURL = function (url) {
    return new Promise(function (resolve, reject) {
        var http = require('http'), https = require('https');
        var client = http;
        if (url.toString().indexOf("https") === 0) {
            client = https;
        }
        client.get(url, function (resp) {
            var data = '';
            // A chunk of data has been recieved.
            resp.on('data', function (chunk) {
                data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on('end', function () {
                resolve(data);
            });
        }).on("error", function (err) {
            reject(err);
        });
    });
};
var WallDataController = /** @class */ (function () {
    function WallDataController() {
    }
    WallDataController.dayInfo = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var nameDays, celebrations, horoscopes;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getContentByURL('https://day.lt/dienos_vardadieniai?charset=utf').then(function (body) {
                        body = body.replace(new RegExp(/document.write\(\'/, 'g'), '');
                        body = body.replace(new RegExp(/\'\)\;/, 'g'), '');
                        body = body.replace(new RegExp(/\s|\n|\r/, 'g'), '');
                        body = body.replace(/(<([^>]+)>)/ig, '');
                        nameDays = body.split(',');
                    }, function (error) { })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, getContentByURL('https://day.lt/dienos_info?format=[svente]&charset=utf').then(function (body) {
                            body = body.replace(new RegExp(/document.write\(\'/, 'g'), '');
                            body = body.replace(new RegExp(/\'\)\;/, 'g'), '');
                            body = body.replace(new RegExp(/\<br \/\>/, 'g'), ',');
                            body = body.replace(new RegExp(/[ ]{2,}|\n|\r/, 'g'), '');
                            body = body.replace(/(<([^>]+)>)/ig, '');
                            celebrations = body.split(',');
                        }, function (error) { })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, getContentByURL('http://www.vytautus.com/hor_rss.xml').then(function (body) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, parser.xmlToJson(body, function (err, json) {
                                            if (!err) {
                                                // json.rss.channel.pubDate;
                                                json.rss.channel.item.map(function (item) {
                                                    delete item.link;
                                                    return item;
                                                });
                                                horoscopes = json.rss.channel.item;
                                            }
                                        }, function (error) { })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                case 3:
                    _a.sent();
                    res.status(200).send({
                        nameDays: nameDays,
                        celebrations: celebrations,
                        horoscopes: horoscopes
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    WallDataController.weather = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getContentByURL('https://api.openweathermap.org/data/2.5/weather?id=597231&lang=en&units=metric&appid=815bcde19fc5c6054748ea55195b7fc9&parameters=all').then(function (body) {
                        res.status(200).send(JSON.parse(body));
                    }, function (error) {
                        res.status(400).send({});
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    WallDataController.getSettings = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var clue, screen, error_2, times, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clue = req.params.clue;
                    return [4 /*yield*/, exports.getScreenByKey(clue)];
                case 1:
                    screen = _a.sent();
                    if (!screen) {
                        res.status(401).send({
                            clue: clue
                        });
                        return [2 /*return*/];
                    }
                    if (!screen.school.restart) return [3 /*break*/, 6];
                    screen.school.restart = false;
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, typeorm_1.getRepository(School_1.School).save(screen.school)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 5];
                case 5:
                    screen.school.restart = true;
                    _a.label = 6;
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, typeorm_1.getRepository(Time_1.Time).findOneOrFail({
                            where: {
                                school: screen.school,
                                active: true
                            }
                        })];
                case 7:
                    times = _a.sent();
                    times.times.unshift({ h: 0, m: 0, lesson: false, lessonN: 1 });
                    return [3 /*break*/, 9];
                case 8:
                    error_3 = _a.sent();
                    // console.log(error);
                    screen.times = [];
                    res.status(200).send(screen);
                    return [3 /*break*/, 9];
                case 9:
                    screen.times = times.times;
                    res.status(200).send(screen);
                    return [2 /*return*/];
            }
        });
    }); };
    WallDataController.notifications = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var clue, screen, notificationsRepository, currentDate, tommorowDate, notifications, notifications2, dayNames;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clue = req.params.clue;
                    return [4 /*yield*/, exports.getScreenByKey(clue)];
                case 1:
                    screen = _a.sent();
                    if (!screen) {
                        res.status(401).send({
                            clue: clue
                        });
                        return [2 /*return*/];
                    }
                    notificationsRepository = typeorm_1.getRepository(Notification_1.Notification);
                    currentDate = new Date();
                    currentDate.setHours(0, 0, 0, 0);
                    tommorowDate = new Date();
                    tommorowDate.setHours(0, 0, 0, 0);
                    tommorowDate.setDate(currentDate.getDate() + 1);
                    return [4 /*yield*/, notificationsRepository.find({
                            where: [{
                                    school: screen.school.id,
                                    date1: currentDate,
                                    visibility: true,
                                    deletedAt: null
                                }, {
                                    school: screen.school.id,
                                    date1: typeorm_1.LessThanOrEqual(currentDate),
                                    date2: typeorm_1.MoreThanOrEqual(currentDate),
                                    visibility: true,
                                    repeatTimes: true,
                                    deletedAt: null
                                }],
                            relations: ["images"]
                        })];
                case 2:
                    notifications = _a.sent();
                    return [4 /*yield*/, notificationsRepository.find({
                            where: [{
                                    school: screen.school.id,
                                    date1: tommorowDate,
                                    showBefore: true,
                                    visibility: true,
                                    deletedAt: null
                                }],
                            relations: ["images"]
                        })];
                case 3:
                    notifications2 = _a.sent();
                    dayNames = ['Sekmadienį', 'Pirmadienį', 'Antradienį', 'Trečiadienį', 'Ketvirtadienį', 'Penktadienį', 'Šeštadienį', 'Sekmadienį'];
                    notifications.forEach(function (element) {
                        element.day = 'Šiandien';
                    });
                    notifications2.forEach(function (element) {
                        element.day = dayNames[tommorowDate.getDay()];
                    });
                    res.status(200).send({
                        notifications: new Array().concat(notifications, notifications2),
                        // notifications2,
                        currentDate: currentDate,
                        tommorowDate: tommorowDate
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    WallDataController.timetable = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var clue, screen, semester, day, lessons;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clue = req.params.clue;
                    return [4 /*yield*/, exports.getScreenByKey(clue)];
                case 1:
                    screen = _a.sent();
                    if (!screen) {
                        res.status(401).send({
                            clue: clue
                        });
                        return [2 /*return*/];
                    }
                    semester = exports.getCurrentSemester(screen.school);
                    if (!semester)
                        screen.school.showTimetable = false;
                    day = new Date().getDay();
                    if (!screen.school.showTimetable) {
                        res.send({
                            semester: semester,
                            weekDay: day,
                            lessons: [],
                            show: false
                        });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, typeorm_1.getRepository(Timetable_1.Timetable).find({
                            where: { weekDay: day, semester: semester, school: screen.school },
                            select: ['className', 'lessonNr'],
                            relations: ['discipline']
                        })];
                case 2:
                    lessons = _a.sent();
                    return [4 /*yield*/, lessons.sort(function (a, b) {
                            if (a.className < b.className) {
                                return -1;
                            }
                            if (a.className > b.className) {
                                return 1;
                            }
                            return 0;
                        })];
                case 3:
                    _a.sent();
                    res.status(200).send({
                        semester: semester,
                        day: day,
                        lessons: lessons
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return WallDataController;
}());
;
exports.default = WallDataController;
//     success: function(openweathermap) {
//       $("#weather").html('<i class="wi ' + ((openweathermap.weather[0].icon == '01n')? 'wi-night-clear' : 'wi-owm-' + openweathermap.weather[0].id) + '"></i><span>' + Math.round(openweathermap.main.temp) + '<i class="wi wi-celsius"></i></span>' +((openweathermap.wind.deg == undefined)? '' : '<i class="wi wi-wind" style="transform: rotate(' + openweathermap.wind.deg + 'deg);padding: 0px 6px;width: 1em;"></i>')  + '<i class="wi ' + ((openweathermap.wind.speed <= 12) ? 'wi-wind-beaufort-' + Math.round(openweathermap.wind.speed) : 'wi-strong-wind') +'"></i>');
//       var sunrise = new Date(openweathermap.sys.sunrise * 1000);
//       var sunset = new Date(openweathermap.sys.sunset * 1000);
//       $("#sr").html(checkTime(sunrise.getHours()) + ':' + checkTime(sunrise.getMinutes()));
//       $("#ss").html(checkTime(sunset.getHours()) + ':' + checkTime(sunset.getMinutes()));
//       setTimeout(weather, 900000); //15min
//     },
//     error: function() {
//       setTimeout(weather, 60000); //1min
//     }
//   });
// this.sunrise = new Date(this.data.sys.sunrise * 1000).getHours() + ':' + this.checkTime(new Date(this.data.sys.sunrise * 1000).getMinutes());
//       this.sunset = new Date(this.data.sys.sunset * 1000).getHours() + ':' + this.checkTime(new Date(this.data.sys.sunset * 1000).getMinutes());
//       this.weatherr = '<i class="wi ' + ((this.data.weather[0].icon == '01n') ? 'wi-night-clear' : 'wi-owm-' + this.data.weather[0].id) + '"></i><span>' + Math.round(this.data.main.temp) + '<i class="wi wi-celsius"></i></span>' + ((this.data.wind.deg == undefined) ? '' : '<i class="wi wi-wind" style="transform: rotate(' + this.data.wind.deg + 'deg);padding: 0px 6px;width: 1em;"></i>') + '<i class="wi ' + ((this.data.wind.speed <= 12) ? 'wi-wind-beaufort-' + Math.round(this.data.wind.speed) : 'wi-strong-wind') + '"></i>';
//# sourceMappingURL=ScreenController.js.map