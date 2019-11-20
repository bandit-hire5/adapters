"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(identifier, role) {
        this._identifier = identifier;
        this._role = role;
    }
    get id() {
        return this._identifier;
    }
    get role() {
        return this._role;
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map