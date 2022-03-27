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
var path = require("path");
require("express-fileupload");
var Image_1 = require("../entity/Image");
var School_1 = require("../entity/School");
var index_1 = require("../index");
var UploadsController = /** @class */ (function () {
    function UploadsController() {
    }
    var _a;
    _a = UploadsController;
    UploadsController.logoUpload = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var image, newName, filesLocation, publicLocation;
        return __generator(_a, function (_b) {
            if (Object.keys(req.files).length == 0) {
                res.status(400).send('Serveris negavo failo. Parašyk žinutę dešinėje pagalbai!');
                return [2 /*return*/];
            }
            image = req.files.image;
            newName = image.md5 + path.extname(image.name);
            filesLocation = path.join(path.dirname('/srv/ekranas/img/'), 'img/logos/', newName);
            publicLocation = path.join('/img/logos/', newName);
            // Use the mv() method to place the file somewhere on your server
            image.mv(filesLocation, function (err) {
                return __awaiter(this, void 0, void 0, function () {
                    var error_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (err) {
                                    err.dd = filesLocation;
                                    res.status(500).send(err);
                                    return [2 /*return*/];
                                }
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, index_1.dataSource.getRepository(School_1.School).save({
                                        id: req.session.user.school.id,
                                        logo: publicLocation
                                    })];
                            case 2:
                                _b.sent();
                                req.session.user.school.logo = publicLocation;
                                res.send({
                                    message: 'Logotipas sėkmingai įkeltas ir pakeistas!',
                                    url: publicLocation
                                });
                                return [2 /*return*/];
                            case 3:
                                error_1 = _b.sent();
                                res.status(500).send(error_1);
                                return [2 /*return*/];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            });
            return [2 /*return*/];
        });
    }); };
    UploadsController.imageUpload = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var image, types, newName, filesLocation, publicLocation;
        return __generator(_a, function (_b) {
            if (Object.keys(req.files).length == 0) {
                res.status(400).send('Serveris negavo failo. Parašyk žinutę dešinėje pagalbai');
                return [2 /*return*/];
            }
            image = req.files.image;
            if (image.truncated) {
                res.status(413).send('Failas viršijo dydį');
                return [2 /*return*/];
            }
            types = ['image/bmp', 'image/gif', 'image/x-freehand', 'image/x-freehand',
                'image/x-freehand', 'image/x-icon', 'image/jpeg', 'image/jpeg', 'image/jpeg',
                'image/png', 'image/svg+xml', 'image/tiff', 'image/tiff'];
            if (types.findIndex(function (x) { return x == image.mimetype; }) === -1) {
                res.status(400).send('Failas netinkamo formato. Prašome pasirinkti nuotrauką.');
                return [2 /*return*/];
            }
            newName = image.md5 + path.extname(image.name);
            filesLocation = path.join(path.dirname('/srv/ekranas/img/'), 'img/uploads/', newName);
            publicLocation = path.join('/img/uploads/', newName);
            // Use the mv() method to place the file somewhere on your server
            image.mv(filesLocation, function (err) {
                return __awaiter(this, void 0, void 0, function () {
                    var uploadedImage, ImagesRepository, imageRef, error_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!err) return [3 /*break*/, 1];
                                res.status(500).send(err);
                                return [2 /*return*/];
                            case 1:
                                uploadedImage = {
                                    name: image.name,
                                    size: image.size,
                                    url: publicLocation,
                                    user: req.session.user,
                                    school: req.session.user.school
                                };
                                return [4 /*yield*/, index_1.dataSource.getRepository(Image_1.Image)];
                            case 2:
                                ImagesRepository = _b.sent();
                                _b.label = 3;
                            case 3:
                                _b.trys.push([3, 5, , 6]);
                                return [4 /*yield*/, ImagesRepository.save(uploadedImage)];
                            case 4:
                                imageRef = _b.sent();
                                delete imageRef.user;
                                delete imageRef.school;
                                res.send({
                                    message: 'Nuotrauka ' + image.name + ' sėkmingai įkelta!',
                                    image: imageRef
                                });
                                return [2 /*return*/];
                            case 5:
                                error_2 = _b.sent();
                                res.status(500).send(error_2);
                                return [2 /*return*/];
                            case 6: return [2 /*return*/];
                        }
                    });
                });
            });
            return [2 /*return*/];
        });
    }); };
    return UploadsController;
}());
;
exports.default = UploadsController;
//# sourceMappingURL=UploadsController.js.map