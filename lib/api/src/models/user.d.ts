import { User as IUser, UserRole as IUserRole } from "~src/interfaces/auth";
declare class User implements IUser {
    private _identifier;
    private _role;
    constructor(identifier: string, role: IUserRole);
    get id(): string;
    get role(): IUserRole;
}
export default User;
