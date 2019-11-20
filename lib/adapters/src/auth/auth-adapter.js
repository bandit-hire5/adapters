"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const user_1 = __importDefault(require("~src/models/user"));
const user_role_1 = __importDefault(require("~src/models/user-role"));
const role_resources_1 = require("~src/configs/role-resources");
// TODO remove hardcoded password
const PASSWORD = "password";
// TODO use storage to check login/password
let AuthAdapter = class AuthAdapter {
    getUser(login, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (password !== PASSWORD) {
                // TODO add types for errors
                throw new Error("Invalid login or password");
            }
            return new user_1.default(login, new user_role_1.default([
                {
                    resource: role_resources_1.RESOURCES.PAGE,
                    operations: [
                        role_resources_1.PAGE_RESOURCE_OPERATIONS.CREATE,
                        role_resources_1.PAGE_RESOURCE_OPERATIONS.PUBLISH,
                        role_resources_1.PAGE_RESOURCE_OPERATIONS.UPDATE,
                        role_resources_1.PAGE_RESOURCE_OPERATIONS.REMOVE,
                    ],
                },
            ]));
        });
    }
};
AuthAdapter = __decorate([
    inversify_1.injectable()
], AuthAdapter);
exports.default = AuthAdapter;
//# sourceMappingURL=auth-adapter.js.map