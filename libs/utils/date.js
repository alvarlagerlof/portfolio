"use strict";
exports.__esModule = true;
exports.parseDate = exports.formatDate = void 0;
var luxon_1 = require("luxon");
function parseDate(date) {
    return luxon_1.DateTime.fromISO(date);
}
exports.parseDate = parseDate;
function formatDate(date, format) {
    if (format === void 0) { format = "MMM d, yyyy"; }
    var parsed = parseDate(date);
    var formatted = parsed.toFormat(format);
    return formatted;
}
exports.formatDate = formatDate;
