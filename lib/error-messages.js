"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ERRORS;
(function (ERRORS) {
    ERRORS["UNKNOWN"] = "UNKNOWN";
    ERRORS["UNAUTHORIZED"] = "UNAUTHORIZED";
    ERRORS["PERMISSION_DENIED"] = "PERMISSION_DENIED";
})(ERRORS = exports.ERRORS || (exports.ERRORS = {}));
var HTTP_CODES;
(function (HTTP_CODES) {
    HTTP_CODES[HTTP_CODES["UNKNOWN"] = 500] = "UNKNOWN";
    HTTP_CODES[HTTP_CODES["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTP_CODES[HTTP_CODES["PERMISSION_DENIED"] = 404] = "PERMISSION_DENIED";
})(HTTP_CODES = exports.HTTP_CODES || (exports.HTTP_CODES = {}));
//# sourceMappingURL=error-messages.js.map