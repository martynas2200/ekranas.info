"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var checkLogin_1 = require("../middlewares/checkLogin");
var TimetablesController_1 = require("../controllers/TimetablesController");
var router = express_1.Router();
// Get all table
router.get("/:semester([0-9]+)/:day([0-9]+)", [checkLogin_1.checkLogin], TimetablesController_1.default.getByDayAndSemester);
// Get classes
router.get('/classes', [checkLogin_1.checkLogin], TimetablesController_1.default.getClasses);
// Create a new timetable row
router.post("/", [checkLogin_1.checkLogin], TimetablesController_1.default.create);
// Edit one timetable row
router.put("/:id([0-9]+)", [checkLogin_1.checkLogin], TimetablesController_1.default.update);
// Delete one timetable row
router.delete("/:semester([1-2])/:weekDay([1-5])/:id([0-9]+)", [checkLogin_1.checkLogin], TimetablesController_1.default.delete);
exports.default = router;
//# sourceMappingURL=timetables.js.map