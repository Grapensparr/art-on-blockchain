export default class Art {
    constructor(title, owner, id, price, manYear, artImage) {
        this.title = title,
        this.owner = owner,
        this.id = id,
        this.price = price,
        this.manYear = manYear,
        this.artImage = artImage
    }

    createUniqueArtID() {
        //Skapa ID för konstverket.
    }

    getOwner() {
        //Funktion som sätter inloggad användare som owner på konstverket.
    }

    registerArt() {
        //Metod för att registrera konstverk
    }
}