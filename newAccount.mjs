const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton2 = document.getElementById("loginButton2");
const createButton = document.getElementById("createButton");

import User from './user.js';
import UserList from './userList.js';

export default function newAccount() {
    let newUser = document.getElementById("newUser");
    let newPassword = document.getElementById("newPassword");

    createButton.addEventListener("click", () => {
        userArray.addUser(new User(newUser.value, newPassword.value))
        console.log(userArray)
    })
    let userArray = new UserList();

    loginButton2.addEventListener("click", async () => {
        let foundUser = userArray.userArray.find(user => user.name === username.value);
        let userId = await foundUser.checkPassword(password.value);
        console.log("userId", userId);
        foundUser.toggleStatus()
        localStorage.setItem("userId", userId);
        console.log("userList", userArray);
    })
}