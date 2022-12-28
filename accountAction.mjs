import User from './user.js';
import userLogsIn from './userLogsIn.mjs';

const username = document.getElementById('username');
const password = document.getElementById("password");
const loginButton2 = document.getElementById('loginButton2');
const createButton = document.getElementById('createButton');
const displayArtInfo = document.getElementById('displayArt');
const registrateArt = document.getElementById('registrateArt');
const logoutButton = document.getElementById('logoutButton');
const pageContent = document.getElementById('pageContent')
const body = document.body;
const gallery = document.getElementById('gallery')
const newUser = document.getElementById('newUser');
const newPassword = document.getElementById('newPassword');
const validationMessage = document.getElementById('validationMessage');
const loginSignup = document.getElementById('loginSignup')
const successMessage = document.createElement('p')

export default function accountAction() {
    let userArray;
    if (!localStorage.getItem('userArray')) {
        userArray = [];
    } else {
        userArray = JSON.parse(localStorage.getItem('userArray'));
    }
    
    createButton.addEventListener('click', () => {
        if (!localStorage.getItem('userArray')) {
            userArray = [];
            } else {
            userArray = JSON.parse(localStorage.getItem('userArray'));
            }
        let tempUser = new User(newUser.value, newPassword.value);
        userArray.push(tempUser);
        localStorage.setItem('userArray', JSON.stringify(userArray));

        successMessage.style.color = 'white';
        successMessage.innerHTML = 'Your account has been created. Please log in!';
        loginSignup.appendChild(successMessage);

        var timeout = 0;
        timeout = setTimeout(function() {
            successMessage.remove();
            timeout = 0;
          }, 3000)
    })

    loginButton2.addEventListener('click', () => {
        userArray = JSON.parse(localStorage.getItem('userArray'));
        const foundUser = userArray.find(function(userArray) {
            return userArray.name === username.value && userArray.password === password.value;
        })

        if (foundUser) {
            let userId = foundUser.id;
            foundUser.online = true;
            localStorage.setItem('userId', userId);
            localStorage.setItem('loginStatus', 'loggedIn');
            localStorage.setItem('currentLoggedIn', foundUser.name);
            userLogsIn();
        } else {
            alert('User not found');
        }
    })

    logoutButton.addEventListener('click', () => {
        body.append(pageContent);
        body.append(gallery);
        displayArtInfo.remove();
        registrateArt.remove();
        logoutButton.remove();
        localStorage.removeItem('currentLoggedIn');
        localStorage.removeItem('userId');
        localStorage.setItem('loginStatus', 'loggedOut');
        validationMessage.remove();
        body.append(validationMessage);
    })
}