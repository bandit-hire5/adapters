import { User as IUser } from "~src/interfaces/auth";
import { SessionStorage as ISessionStorage } from "~src/interfaces/session";
import User from "~src/models/user";
declare class SessionStorage implements ISessionStorage {
    private storage;
    private generateToken;
    getToken(user: User): string;
    getUser(token: string): IUser | null;
}
export default SessionStorage;
