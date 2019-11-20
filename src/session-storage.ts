import { injectable } from "inversify";
import { User as IUser } from "~src/interfaces/auth";
import { SessionStorage as ISessionStorage } from "~src/interfaces/session";
import User from "~src/models/user";
import { v4 as uuid } from "uuid";

// TODO replace with real db storage
@injectable()
class SessionStorage implements ISessionStorage {
  private storage: { [key: string]: IUser } = {};

  private generateToken(): string {
    return uuid();
  }

  public getToken(user: User): string {
    const token = this.generateToken();

    this.storage[token] = user;

    return token;
  }

  public getUser(token: string): IUser | null {
    return this.storage[token] || null;
  }
}

export default SessionStorage;
