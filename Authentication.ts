import { Admin } from "./People/Admin.js";
import { User } from "./People/User.js";
import { UserList } from "./People/UserList.js";
export class Authentication {

    static register(username: string, password: string): User | null {
        for (let i = 0; i < UserList.users.length; i++) {
            const element = UserList.users[i];
            if (element.fullname == username) {
                alert("user with same name exists!");
                return null;
            }
        }
        const user = new User(username, password);
        this.saveUser(user);
        return user;
    }

    static login(username: string, password: string): User | null | Admin {
        console.log("username=" + username)
        console.log("password=" + password)

        for (let i = 0; i < UserList.users.length; i++) {
            let u = UserList.users[i];
            if (u.fullname === username && u.password === password) {
                return u;
            }
        }

        for (let i = 0; i < UserList.admins.length; i++) {
            let u = UserList.admins[i];
            if (u.fullname === username && u.password === password) {
                return u;
            }
        }


        return null;
    }

    private static saveUser(user: User): void {
        UserList.users.push(user);
    }
}