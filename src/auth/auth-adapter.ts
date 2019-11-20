import { injectable } from "inversify";
import { AuthAdapter as IAuthAdapter, User as IUser } from "~src/interfaces/auth";
import User from "~src/models/user";
import UserRole from "~src/models/user-role";
import { PAGE_RESOURCE_OPERATIONS, RESOURCES } from "~src/configs/role-resources";

// TODO remove hardcoded password
const PASSWORD = "password";

// TODO use storage to check login/password
@injectable()
class AuthAdapter implements IAuthAdapter {
  async getUser(login: string, password: string): Promise<IUser> {
    if (password !== PASSWORD) {
      // TODO add types for errors
      throw new Error("Invalid login or password");
    }

    return new User(
      login,
      new UserRole([
        {
          resource: RESOURCES.PAGE,
          operations: [
            PAGE_RESOURCE_OPERATIONS.CREATE,
            PAGE_RESOURCE_OPERATIONS.PUBLISH,
            PAGE_RESOURCE_OPERATIONS.UPDATE,
            PAGE_RESOURCE_OPERATIONS.REMOVE,
          ],
        },
      ])
    );
  }
}

export default AuthAdapter;
