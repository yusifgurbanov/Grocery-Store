import { User } from "./User.js";
import { Admin } from "./Admin.js";
class UserList {
}
UserList.users = [
    new User("user", "123456")
];
UserList.admins = [
    new Admin("admin", "admin")
];
export { UserList };
