export default class userList {
    constructor(name) {
        this.name = name,
        this.users = [];
    }

    addUser(newUser) {
        this.users.push(newUser);
    }
}