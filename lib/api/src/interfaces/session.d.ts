import { User } from "./auth";
export interface SessionStorage {
    getUser(token: string): User | null;
    getToken(user: User): string;
}
