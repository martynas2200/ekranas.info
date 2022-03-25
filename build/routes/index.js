"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("./auth");
var user_1 = require("./user");
var notifications_1 = require("./notifications");
var uploads_1 = require("./uploads");
var disciplines_1 = require("./disciplines");
var timetables_1 = require("./timetables");
var settings_1 = require("./settings");
var contact_1 = require("./contact");
var screen_1 = require("./screen");
// import * as path from "path";
// import main from "./main";
var routes = (0, express_1.Router)();
routes.use("/api/auth", auth_1.default);
routes.use("/api/users", user_1.default);
routes.use("/api/uploads", uploads_1.default);
routes.use("/api/notifications", notifications_1.default);
routes.use("/api/timetables", timetables_1.default);
routes.use("/api/disciplines", disciplines_1.default);
routes.use("/api/settings", settings_1.default);
routes.use("/api/contact", contact_1.default);
routes.use("/api/screen", screen_1.default);
routes.get('/show/:key', function (req, res) {
    res.status(200).sendFile('index.html', { root: 'show' });
});
routes.get('/wall/first.txt', function (req, res) {
    res.status(200).sendFile('first.txt', { root: 'img' });
});
routes.get('/connection/test', function (req, res) {
    //socket.emit('chat message', 'hello friends!');
    // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==
    var img = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==', 'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
    });
    res.end(img);
});
routes.all('*', function (req, res) {
    res.status(404).sendFile('/index.html', { root: 'public' });
});
// routes.use("/", main);
exports.default = routes;
//# sourceMappingURL=index.js.map