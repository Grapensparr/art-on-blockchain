const username = document.getElementById("username");
const logoutButton = document.getElementById("logoutButton");
const registrateArt = document.getElementById("registrateArt");
const body = document.body;
let displayArtInfo = document.getElementById('displayArt');
const pageContent = document.getElementById('pageContent')
let gallery = document.getElementById('gallery')

export default class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
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