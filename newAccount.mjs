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
import userLogsIn from './userLogsIn.mjs';



export default function accountAction() {
    let userArray;
    if (!localStorage.getItem('userArray')) {
        userArray = [];
    } else {
        userArray = JSON.parse(localStorage.getItem('userArray'));
    }
    
    createButton.addEventListener("click", () => {
        if (!localStorage.getItem('userArray')) {
            userArray = [];
            } else {
            userArray = JSON.parse(localStorage.getItem('userArray'));
            }
        console.log("userArray", userArray);
        let tempUser = new User(newUser.value, newPassword.value);
        console.log("tempUser", tempUser);
        userArray.push(tempUser);
        console.log("userArray after push", userArray);
        // userArray.push("name": newUser.value, "password": newPassword.value);
        localStorage.setItem('userArray', JSON.stringify(userArray));
        // JSON.parse(localStorage.getItem('userArray'));
    })

    loginButton2.addEventListener("click", () => {
        console.log("loginButton2 event listener");
        userArray = JSON.parse(localStorage.getItem('userArray'));
        console.log("userArray", userArray);
        // let foundUser = userArray.userArray.find(user => user.name === username.value);
        const foundUser = userArray.find(function(userArray) {
            return userArray.name === username.value && userArray.password === password.value;
        })

        console.log("foundUser", foundUser);

        if (foundUser) {
            let userId = foundUser.id;
            console.log("userId", userId);
            foundUser.online = true;
            console.log("foundUser after toggle", foundUser);
            localStorage.setItem("userId", userId);
            localStorage.setItem("loginStatus", "loggedIn");
            localStorage.setItem("currentLoggedIn", userId);
            userLogsIn();
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