"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var checkLogin_1 = require("../middlewares/checkLogin");
var checkRole_1 = require("../middlewares/checkRole");
var DisciplinesController_1 = require("../controllers/DisciplinesController");
var router = express_1.Router();
// Get all Disciplines
router.get("/", [checkLogin_1.checkLogin], DisciplinesController_1.default.getAll);
// Get one Discipline
// router.get("/:id([0-9]+)", [checkLogin, checkRole(1)], DisciplinesController.getOneById);
// Create a new Discipline
router.post("/", [checkLogin_1.checkLogin, checkRole_1.checkRole(1)], DisciplinesController_1.default.create);
// Edit one Discipline
router.put("/:id([0-9]+)", [checkLogin_1.checkLogin, checkRole_1.checkRole(1)], DisciplinesController_1.default.update);
// Delete one Discipline
router.delete("/:id([0-9]+)", [checkLogin_1.checkLogin, checkRole_1.checkRole(1)], DisciplinesController_1.default.delete);
exports.default = router;
//# sourceMappingURL=disciplines.js.map