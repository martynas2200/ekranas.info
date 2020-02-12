"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = function (req, res, next) {
    if (!req.session || !req.session.user) {
        res.status(401).send('Prašome prisijungti!');
        return;
    }
    else
        next();
};
//# sourceMappingURL=checkLogin.js.map