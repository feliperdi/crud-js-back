"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpCodes[HttpCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
class ErrorModel extends Error {
    constructor(name, message, httpCode, isOperational) {
        super(message);
        this.name = name;
        this.message = message;
        this.httpCode = httpCode;
        this.isOperational = isOperational;
    }
}
exports.default = ErrorModel;
