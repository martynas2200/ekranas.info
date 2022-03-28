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
var Notification_1 = require("../entity/Notification");
var index_1 = require("../index");
var NotificationsController = /** @class */ (function () {
    function NotificationsController() {
    }
    NotificationsController.checkNotificationProperties = function (notification) {
        if (!notification) {
            return false;
        }
        if (notification.hasOwnProperty('date1') &&
            notification.hasOwnProperty('showBefore') &&
            notification.hasOwnProperty('repeatTimes') &&
            notification.hasOwnProperty('note') &&
            notification.hasOwnProperty('important') &&
            notification.hasOwnProperty('author') &&
            notification.hasOwnProperty('displayAuthor') &&
            notification.hasOwnProperty('images')) {
            return true;
        }
        else
            return false;
    };
    ;
    NotificationsController.returnDateString = function (date) {
        if (!date) {
            return '0000-00-00';
        }
        var dateString = date.getFullYear() + '-';
        if (date.getMonth() + 1 < 10)
            dateString += '0';
        dateString += (date.getMonth() + 1) + '-';
        if (date.getDate() < 10)
            dateString += '0';
        dateString += date.getDate();
        return dateString;
    };
    ;
    var _a;
    _a = NotificationsController;
    NotificationsController.listAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var notificationsRepository, notifications, currentDate;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index_1.dataSource.getRepository(Notification_1.Notification)];
                case 1:
                    notificationsRepository = _b.sent();
                    currentDate = new Date();
                    currentDate.setHours(0, 0, 0, 0);
                    if (!(req.query.type == 'archive')) return [3 /*break*/, 3];
                    return [4 /*yield*/, notificationsRepository.find({
                            where: {
                                school: req.session.user.school,
                                deletedAt: null
                            },
                            relations: ["user", "images"]
                        })];
                case 2:
                    notifications = _b.sent();
                    return [3 /*break*/, 7];
                case 3:
                    if (!(req.query.type == 'deleted')) return [3 /*break*/, 5];
                    return [4 /*yield*/, notificationsRepository.find({
                            where: {
                                school: req.session.user.school,
                                deletedAt: (0, typeorm_1.Not)((0, typeorm_1.IsNull)())
                            },
                            relations: ["user", "images"]
                        })];
                case 4:
                    notifications = _b.sent();
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, notificationsRepository.find({
                        where: [{
                                school: req.session.user.school,
                                date1: (0, typeorm_1.MoreThanOrEqual)(currentDate),
                                deletedAt: (0, typeorm_1.IsNull)()
                            }, {
                                school: req.session.user.school,
                                date2: (0, typeorm_1.MoreThanOrEqual)(currentDate),
                                deletedAt: (0, typeorm_1.IsNull)()
                            }
                        ],
                        relations: ["user", "images"]
                    })];
                case 6:
                    notifications = _b.sent();
                    _b.label = 7;
                case 7:
                    notifications.forEach(function (el) {
                        // (el as any).relevant = IsDateInRange(el.date1, el.date2, el.repeatTimes) || IsDateInRange(el.date1, el.date2, el.repeatTimes, true);
                        if (req.query.type == 'deleted')
                            el.rights = false;
                        else if (req.session.user.role)
                            el.rights = true;
                        else
                            el.rights = (el.user.id == req.session.user.id) ? true : false;
                        delete el.user;
                    });
                    //Send the notifications object
                    res.send({
                        notifications: notifications
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    // static getOneById = async (req: Request, res: Response) => {
    //   //Get the ID from the url
    //   const id: number = parseInt(req.params.id);
    //   if(!id) {
    //     res.status(400).send({
    //       success: false,
    //       message: 'Netinkamas id!'
    //     });
    //     return;
    //   }
    //   //Get the notification from database
    //   const notificationsRepository = await dataSource.getRepository(Notification);
    //   try {
    //     const notification = await notificationsRepository.findOneOrFail(id);
    //     res.status(200).send({
    //       success: true,
    //       notification: notification
    //     });
    //   } catch (error) {
    //     res.status(404).send({
    //       success: false,
    //       message: 'Pranešimas nerastas'
    //     });
    //     return;
    //   }
    // };
    NotificationsController.new = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var notification, currentDate, notificationsRepository, e_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    // Get parameters from the body
                    // if (!req.body.notification) {
                    //   res.status(400).send({
                    //     success: false,
                    //     message: 'Nėra duomenų'
                    //   });
                    //   return;
                    // }
                    // if ( req.body.notification.hasOwnProperty('date1') &&
                    // req.body.notification.hasOwnProperty('showBefore') &&
                    // req.body.notification.hasOwnProperty('repeatTimes') &&
                    // req.body.notification.hasOwnProperty('note') &&
                    // req.body.notification.hasOwnProperty('important') &&
                    // req.body.notification.hasOwnProperty('author') &&
                    // req.body.notification.hasOwnProperty('displayAuthor') &&
                    // req.body.notification.hasOwnProperty('images')) {}
                    // else {
                    //   res.status(400).send({
                    //     success: false,
                    //     message: 'Nėra visų parametrų'
                    //   });
                    //   return;
                    // }
                    if (!NotificationsController.checkNotificationProperties(req.body.notification)) {
                        res.status(400).send({
                            success: false,
                            message: 'Nėra visų parametrų'
                        });
                        return [2 /*return*/];
                    }
                    notification = req.body.notification;
                    // Examine first date
                    notification.date1 = new Date(req.body.notification.date1);
                    currentDate = new Date();
                    currentDate.setHours(0, 0, 0, 0); // Milliseconds reduces likelihood, that notification will be saved exactly 00:00:00:00
                    if (notification.date1 < currentDate) {
                        res.status(400).send({
                            message: 'Nėra prasmės saugoti seną pranešimą.'
                        });
                        return [2 /*return*/];
                    }
                    if (notification.note == '' && notification.images.length == 0) {
                        res.status(400).send({
                            message: 'Nėra prasmės saugoti tuščią pranešimą.'
                        });
                        return [2 /*return*/];
                    }
                    // Examine second date
                    if (notification.repeatTimes) {
                        if (!notification.date2) {
                            res.status(400).send({
                                message: 'Pranešimo kartojimo data neteisinga.'
                            });
                            return [2 /*return*/];
                        }
                        else {
                            notification.date2 = new Date(req.body.notification.date2);
                        }
                        if (notification.date1 >= notification.date2) {
                            res.status(400).send({
                                message: 'Pranešimo kartojimo data negali būti mažesnė.'
                            });
                            return [2 /*return*/];
                        }
                    }
                    else {
                        notification.date2 = null;
                    }
                    // Designate school and user
                    notification.user = req.session.user;
                    notification.school = req.session.user.school;
                    notification.type = ((notification.images.length > 0) ? 'image' : 'note');
                    return [4 /*yield*/, index_1.dataSource.getRepository(Notification_1.Notification)];
                case 1:
                    notificationsRepository = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, notificationsRepository.save(notification)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _b.sent();
                    res.status(409).send({
                        success: false,
                        message: 'Nepavyko įrašyti pranešimo',
                        error: e_1
                    });
                    return [2 /*return*/];
                case 5:
                    // OK, send 201 response
                    res.status(201).send({
                        success: true,
                        message: 'Pranešimas sėkmingai išsaugotas',
                        notification: notification
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    NotificationsController.toggleVisibility = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, notificationRepository, notification, error_1, e_2;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    id = parseInt(req.params.id);
                    return [4 /*yield*/, index_1.dataSource.getRepository(Notification_1.Notification)];
                case 1:
                    notificationRepository = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, notificationRepository.findOneOrFail({
                            where: {
                                school: req.session.user.school,
                                id: id
                            },
                            relations: ["user"]
                        })];
                case 3:
                    notification = _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    res.status(404).send({
                        success: false,
                        message: 'Pranešimas nerastas'
                    });
                    return [2 /*return*/];
                case 5:
                    notification.visibility = !notification.visibility;
                    // User rights
                    if (req.session.user.role == 0 && notification.user.id != req.session.user.id) {
                        res.status(400).send({
                            message: 'Neturite teisių redaguoti šį pranešimą!'
                        });
                        return [2 /*return*/];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, notificationRepository.save(notification)];
                case 7:
                    notification = _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    e_2 = _b.sent();
                    res.status(409).send({
                        success: false,
                        message: 'Pranešimo nepavyko įrašyti',
                        error: e_2
                    });
                    return [2 /*return*/];
                case 9:
                    res.status(200).send({
                        success: true,
                        message: (!notification.visibility) ? 'Sėkmingai pranešimas paslėptas!' : 'Pranešimas sėkmingas rodomas!'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    NotificationsController.update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, notificationRepository, notification, error_2, e_3;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    id = parseInt(req.params.id);
                    if (!NotificationsController.checkNotificationProperties(req.body.notification)) {
                        res.status(400).send({
                            success: false,
                            message: 'Nėra visų parametrų'
                        });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, index_1.dataSource.getRepository(Notification_1.Notification)];
                case 1:
                    notificationRepository = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, notificationRepository.findOneOrFail({
                            where: {
                                school: req.session.user.school,
                                id: id
                            },
                            relations: ['school', 'user']
                        })];
                case 3:
                    notification = _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _b.sent();
                    res.status(404).send({
                        success: false,
                        message: 'Pranešimas nerastas'
                    });
                    return [2 /*return*/];
                case 5:
                    notification = req.body.notification;
                    notification.date1 = new Date(req.body.notification.date1);
                    // Examine second date
                    if (notification.repeatTimes) {
                        notification.date2 = new Date(req.body.notification.date2);
                        if (notification.date1 >= notification.date2) {
                            res.status(400).send({
                                message: 'Pranešimo kartojimo data negali būti mažesnė.'
                            });
                            return [2 /*return*/];
                        }
                        if (!notification.date2) {
                            res.status(400).send({
                                message: 'Pranešimo kartojimo data neteisinga.'
                            });
                            return [2 /*return*/];
                        }
                    }
                    else {
                        notification.date2 = null;
                    }
                    if (req.session.user.role == 0 && notification.user.id != req.session.user.id) {
                        res.status(400).send({
                            message: 'Neturite teisių redaguoti šį pranešimą!'
                        });
                        return [2 /*return*/];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, notificationRepository.save(notification)];
                case 7:
                    notification = _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    e_3 = _b.sent();
                    res.status(409).send({
                        success: false,
                        message: 'Pranešimo nepavyko įrašyti',
                        error: e_3
                    });
                    return [2 /*return*/];
                case 9:
                    // Correct Date strings
                    notification.date1 = NotificationsController.returnDateString(notification.date1);
                    if (notification.date2) {
                        notification.date2 = NotificationsController.returnDateString(notification.date2);
                    }
                    // After all send response without user data
                    delete notification.user;
                    res.status(200).send({
                        success: true,
                        message: 'Pranešimas išsaugotas',
                        notification: notification
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    NotificationsController.delete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, notificationRepository, notification, error_3, error_4;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    id = parseInt(req.params.id);
                    if (!id) {
                        res.status(400).send({
                            success: false,
                            message: 'Netinkamas id!'
                        });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, index_1.dataSource.getRepository(Notification_1.Notification)];
                case 1:
                    notificationRepository = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, notificationRepository.findOneOrFail({
                            where: {
                                school: req.session.user.school,
                                id: id
                            },
                            relations: ['user']
                        })];
                case 3:
                    notification = _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _b.sent();
                    res.status(404).send({
                        success: false,
                        message: 'Pranešimas nerastas!'
                    });
                    return [2 /*return*/];
                case 5:
                    if (req.session.user.role == 0 && notification.user.id != req.session.user.id) {
                        res.status(400).send({
                            message: 'Neturite teisių ištrinti šį pranešimą!'
                        });
                        return [2 /*return*/];
                    }
                    notification.deletedAt = new Date();
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, notificationRepository.save(notification)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    error_4 = _b.sent();
                    res.status(500).send({
                        success: false,
                        message: 'Pranešimo ištrinti nepavyko!',
                        error: error_4
                    });
                    return [2 /*return*/];
                case 9:
                    // if (notificationRepository.delete(id)) 
                    res.status(200).send({
                        success: true,
                        message: 'Pranešimas sėkmingai perkeltas į ištrintus'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return NotificationsController;
}());
;
exports.default = NotificationsController;
//# sourceMappingURL=NotificationsController.js.map