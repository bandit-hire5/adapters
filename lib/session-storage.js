"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const uuid_1 = require("uuid");
// TODO replace with real db storage
let SessionStorage = class SessionStorage {
    constructor() {
        this.storage = {};
    }
    generateToken() {
        return uuid_1.v4();
    }
    getToken(user) {
        const token = this.generateToken();
        this.storage[token] = user;
        return token;
    }
    getUser(token) {
        return this.storage[token] || null;
    }
};
SessionStorage = __decorate([
    inversify_1.injectable()
], SessionStorage);
exports.default = SessionStorage;
//# sourceMappingURL=session-storage.js.map