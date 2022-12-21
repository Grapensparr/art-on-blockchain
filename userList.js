export default class UserList {
    constructor() {
        this.userArray = [

        ];
    }

    addUser(user) {
        this.userArray.push(user);
        localStorage.removeItem("userArray")
        localStorage.setItem("userArray", JSON.stringify(this.userArray))
    }

}