"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateInRange = void 0;
var IsDateInRange = function (start, end, repeat, tomorrow) {
    if (repeat === void 0) { repeat = false; }
    if (tomorrow === void 0) { tomorrow = false; }
    var startDate = new Date(start);
    var date = new Date();
    if (tomorrow) {
        date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    }
    var endDate = new Date(end);
    startDate.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    if (startDate.getTime() === date.getTime()) {
        return true;
    }
    // If end date is invalid
    if (endDate.getTime() === new Date(0).getTime() || end === null || end === '0000-00-00') {
        endDate = startDate;
    }
    if (repeat) {
        return (startDate.getTime() <= date.getTime() && date.getTime() <= endDate.getTime());
    }
    else {
        return false;
    }
};
exports.IsDateInRange = IsDateInRange;
//# sourceMappingURL=Functions.js.map