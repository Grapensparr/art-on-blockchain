export default class User {
    constructor(name, password) {
        this.name = name,
        this.id = self.crypto.randomUUID();
        this.password = password,
        this.ownedArt = [];
    }

    listOwnedArt() {
        //Metod för att visa ägda konstverk.
        const ownedArtUl = document.createElement("ul");
        ownedArtUl.setAttribute("id", "ownedArtUl");
        document.body.appendChild(ownedArtUl);

        for (let i = 0; i < this.ownedArt.length; i++) {
            let artWork = document.createElement("li");
            document.getElementById("ownedArtUl").appendChild(artWork);
            artWork.innerHTML = "Titel: " + this.ownedArt[i].title;
            console.log(this.ownedArt[i].title);
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

    

    
}