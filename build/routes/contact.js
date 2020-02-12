"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ContactController_1 = require("../controllers/ContactController");
var router = express_1.Router();
router.post('/', ContactController_1.default.message);
router.post('/error', ContactController_1.default.log);
exports.default = router;
//# sourceMappingURL=contact.js.map