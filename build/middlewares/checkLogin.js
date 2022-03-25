"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = void 0;
var checkLogin = function (req, res, next) {
    if (!req.session || !req.session.user) {
        res.status(401).send('Prašome prisijungti!');
        return;
    }
    else
        next();
};
exports.checkLogin = checkLogin;
//# sourceMappingURL=checkLogin.js.map