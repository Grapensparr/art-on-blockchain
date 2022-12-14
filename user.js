export default class User {
    constructor(name, password, id) {
        this.name = name,
        this.id = id,
        this.password = password,
        this.ownedArt = [];
    }

    sendArt() {
        //Metod för att skicka konstverk
    }

    listOwnedArt() {
        //Metod för att visa ägda konstverk.
    }

    createUniqueUserID() {
        //Skapa unikt ID för användare
    }
}