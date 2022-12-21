const username = document.getElementById("username");
const loginForm = document.getElementById("loginForm");

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
            document.getElementById("aboutContent").style.display = "none";
            document.getElementById("instructionsContent").style.display = "none";
            document.getElementById("registrateArt").style.display = "block";
            document.getElementById('displayArt').style.display = "block";
            loginForm.style.display = "none"
            localStorage.setItem("loginStatus", "loggedIn");
            localStorage.setItem("currentLoggedIn", username.value);
            return this.id;
        } else {
            alert("User not found");
            return false;
        }
    }
}
    
    //transferArt() {
        //Metod för att skicka konstverk
        
        //Användare väljer art i rullista

        //Användare skriver in namn på mottagare

        
        //Användare klikcar på skicka
            //Object dras ut från skickande användares array och pushas till mottagande användares array
            //Detta sparas i ett block
    //}