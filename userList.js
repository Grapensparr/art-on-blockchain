export default class UserList {
    constructor(name) {
        this.name = name,
        this.users = [];
    }

    addUser(newUser) {
        this.users.push(newUser);
    }
}