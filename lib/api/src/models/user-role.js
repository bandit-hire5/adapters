"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserRole {
    constructor(permissions) {
        this.permissions = permissions;
    }
    hasPermission(resource, operation) {
        for (const perm of this.permissions) {
            if (perm.resource !== resource) {
                continue;
            }
            if (perm.operations.includes(operation)) {
                return true;
            }
        }
        return false;
    }
}
exports.default = UserRole;
//# sourceMappingURL=user-role.js.map