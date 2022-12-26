const username = document.getElementById("username");
const loginForm = document.getElementById("loginForm");
const logoutButton = document.getElementById("logoutButton");
const registrateArt = document.getElementById("registrateArt");
const body = document.body;

const password = document.getElementById("password");
const closeButton = document.getElementById("closeButton");
const loginButton1 = document.getElementById("loginButton1");
const loginButton2 = document.getElementById("loginButton2");
const createButton = document.getElementById("createButton");
const validateBtn = document.getElementById("validateBtn");
const footer = document.getElementById("footer");
const editBtn = document.getElementById("editBtn");
const transferArtBtn = document.getElementById("transferArtBtn");
const sendingUser = document.getElementById("sendingUser");
const receiver= document.getElementById("receiver");
const artID = document.getElementById("artID");
const showTransferList = document.getElementById("showTransferList");
let createTitle = document.getElementById("createTitle");
let createOwner = document.getElementById("createOwner");
let createPrice = document.getElementById("createPrice");
let createManYear = document.getElementById("createManYear");
let createArtImage = document.getElementById("createArtImage");
let createArtBtn = document.getElementById("createArtBtn");
let displayArtInfo = document.getElementById('displayArt');
const aboutContent = document.getElementById("aboutContent")
const instructionsContent = document.getElementById('instructionsContent')
const loginSignup = document.getElementById('loginSignup')
const pageContent = document.getElementById('pageContent')
let gallery = document.getElementById('gallery')

export default class User {
    constructor(name, password) {
        this.name = name;
        this.password = this.savePassword(password);
        this.id = self.crypto.randomUUID();
        this.online = false;
        this.ownedArt = [];
    }

    toggleStatus() {
        this.online = !this.online;
    }

   async consumePassword(password) {
        let msgInt8 = new TextEncoder().encode(password+"salt1234salt");
          let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
          let hashArray = Array.from(new Uint8Array(hashBuffer));
          let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
          return hashHex;  
    }

    async savePassword(password) {
        console.log("lösen in", password);
        let hashPass = await this.consumePassword(password);
        console.log("hash pasword", hashPass);
        this.password = hashPass;
    }

    async checkPassword(password) {
        let testPassword = await this.consumePassword(password)
        console.log("testPassword", testPassword);
        if (testPassword === this.password) {
            body.append(logoutButton)
            logoutButton.classList.remove("hidden")
            body.append(registrateArt)
            registrateArt.classList.remove("hidden")
            pageContent.remove()
            body.append(displayArtInfo)
            gallery.remove()
            localStorage.setItem("loginStatus", "loggedIn");
            localStorage.setItem("currentLoggedIn", username.value);
            return this.id;
        } else {
            alert("User not found");
            localStorage.setItem("loginStatus", "loggedOut")
            return false;
        }
    }
}