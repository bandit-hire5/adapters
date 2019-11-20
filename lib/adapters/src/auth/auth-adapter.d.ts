import { AuthAdapter as IAuthAdapter, User as IUser } from "~src/interfaces/auth";
declare class AuthAdapter implements IAuthAdapter {
    getUser(login: string, password: string): Promise<IUser>;
}
export default AuthAdapter;
