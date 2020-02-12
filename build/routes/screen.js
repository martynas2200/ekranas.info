"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ScreenController_1 = require("../controllers/ScreenController");
var router = express_1.Router();
router.get('/day', ScreenController_1.default.dayInfo);
router.get('/weather', ScreenController_1.default.weather);
router.get('/:clue/notifications', ScreenController_1.default.notifications);
router.get('/:clue/lessons', ScreenController_1.default.timetable);
router.get('/:clue', ScreenController_1.default.getSettings);
// router.post('/error', );
exports.default = router;
//# sourceMappingURL=screen.js.map