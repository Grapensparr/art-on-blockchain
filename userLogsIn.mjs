import accountAction from "./newAccount.mjs";

const username = document.getElementById("username");
const logoutButton = document.getElementById("logoutButton");
const registrateArt = document.getElementById("registrateArt");
const body = document.body;
let displayArtInfo = document.getElementById('displayArt');
const pageContent = document.getElementById('pageContent');
let gallery = document.getElementById('gallery');

export default function userLogsIn() {
    console.log("hello from userLogsIn function");
    body.append(logoutButton)
    logoutButton.classList.remove("hidden")
    body.append(registrateArt)
    registrateArt.classList.remove("hidden")
    pageContent.remove()
    body.append(displayArtInfo)
    gallery.remove()
    // localStorage.setItem("loginStatus", "loggedIn");
    // localStorage.setItem("currentLoggedIn", username.value);
}