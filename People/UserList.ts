import { User } from "./User.js";
import { Admin } from "./Admin.js";

export class UserList {
    static users: Array<User> = [
        new User("user", "123456")
    ];

    static admins: Array<Admin> = [
        new Admin("admin", "admin")
    ];
}