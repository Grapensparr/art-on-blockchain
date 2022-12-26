const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton2 = document.getElementById("loginButton2");
const createButton = document.getElementById("createButton");

const displayArtInfo = document.getElementById('displayArt');
const registrateArt = document.getElementById("registrateArt");
const instructionsContent = document.getElementById("instructionsContent");
const aboutContent = document.getElementById("aboutContent");
const logoutButton = document.getElementById("logoutButton");
const pageContent = document.getElementById('pageContent')
const body = document.body;
let gallery = document.getElementById('gallery')

import User from './user.js';
import UserList from './userList.js';

export default function accountAction() {
    let newUser = document.getElementById("newUser");
    let newPassword = document.getElementById("newPassword");

    let userArray = new UserList

    createButton.addEventListener("click", () => {
        JSON.parse(localStorage.getItem('userArray'))
        userArray.addUser(new User(newUser.value, newPassword.value))
        localStorage.setItem('userArray', JSON.stringify(userArray))
        JSON.parse(localStorage.getItem('userArray'))
    })

    loginButton2.addEventListener("click", async () => {
        let foundUser = userArray.userArray.find(user => user.name === username.value);
        let userId = await foundUser.checkPassword(password.value);
        console.log("userId", userId);
        foundUser.toggleStatus()
        localStorage.setItem("userId", userId);
        console.log("userList", userArray);
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