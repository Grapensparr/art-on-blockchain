const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton2 = document.getElementById("loginButton2");
const createButton = document.getElementById("createButton");
const displayArtInfo = document.getElementById('displayArt');
const registrateArt = document.getElementById("registrateArt");
const logoutButton = document.getElementById("logoutButton");
const pageContent = document.getElementById('pageContent')
const body = document.body;
const gallery = document.getElementById('gallery')
let newUser = document.getElementById("newUser");
let newPassword = document.getElementById("newPassword");

import User from './user.js';
import UserList from './userList.js';

export default function accountAction() {
    let userArray = new UserList

    createButton.addEventListener("click", () => {
        JSON.parse(localStorage.getItem('userArray'));
        userArray.addUser(new User(newUser.value, newPassword.value));
        localStorage.setItem('userArray', JSON.stringify(userArray));
        JSON.parse(localStorage.getItem('userArray'));
        console.log("userArray after reg", userArray);
    })

    loginButton2.addEventListener("click", () => {
        console.log("loginButton2 event listener");
        // let foundUser = userArray.userArray.find(user => user.name === username.value);
        const foundUser = userArray.userArray.find(function(userArray) {
            return userArray.name === username.value && userArray.password === password.value;
        })

        console.log("foundUser", foundUser);

        if (foundUser) {
            console.log("Username and password match");
            // console.log("foundUser id", foundUser.id);
        } else {
            console.log("Username and password do not match");
        }
        // let userId = await foundUser.checkPassword(password.value);
        // foundUser.toggleStatus()
        // localStorage.setItem("userId", userId);
    })

    logoutButton.addEventListener("click", () => {
        body.append(pageContent);
        body.append(gallery);
        displayArtInfo.remove();
        registrateArt.remove();
        logoutButton.remove();
        localStorage.removeItem("currentLoggedIn");
        localStorage.removeItem('userId');
        localStorage.setItem("loginStatus", "loggedOut");
    })
}