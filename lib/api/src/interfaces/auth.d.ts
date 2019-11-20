import { ResourceOperations } from "~src/interfaces/user-permissions";
import { RESOURCES } from "~src/configs/role-resources";
export interface User {
    id: string;
    role: UserRole;
}
export interface UserRole {
    hasPermission(resource: RESOURCES, operation: ResourceOperations): boolean;
}
export interface AuthAdapter {
    getUser(login: string, password: string): Promise<User>;
}
