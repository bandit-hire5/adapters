"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const winston_1 = __importDefault(require("winston"));
const identifiers_1 = require("~src/container/identifiers");
const config_1 = __importDefault(require("~src/interfaces/config"));
let Logger = class Logger {
    constructor(config) {
        this.error = (msg) => this.logger.error(msg);
        this.warn = (msg) => this.logger.warn(msg);
        this.info = (msg) => this.logger.info(msg);
        this.debug = (msg) => this.logger.debug(msg);
        const options = {
            transports: [
                new winston_1.default.transports.Console({
                    level: config.app.IS_PRODUCTION_MODE ? "error" : "debug",
                }),
            ],
        };
        this.logger = winston_1.default.createLogger(options);
    }
};
Logger = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(identifiers_1.CONFIG)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.default !== "undefined" && config_1.default) === "function" ? _a : Object])
], Logger);
exports.default = Logger;
//# sourceMappingURL=logger.js.map