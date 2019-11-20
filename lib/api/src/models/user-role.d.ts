import { UserRole as IUserRole } from "~src/interfaces/auth";
import { ResourceOperations, UserPermission } from "~src/interfaces/user-permissions";
import { RESOURCES } from "~src/configs/role-resources";
declare class UserRole implements IUserRole {
    private permissions;
    constructor(permissions: UserPermission[]);
    hasPermission(resource: RESOURCES, operation: ResourceOperations): boolean;
}
export default UserRole;
