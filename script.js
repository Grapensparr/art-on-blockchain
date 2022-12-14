//Klass för användare - Kristoffer
    //Array med konstverk som användaren äger
    //Kan skicka konstverket
    //Kan ta emot konstverk
    //Kan registrera konstverk
    //Kan få ut lista på vilka konstverket äger

//Användarlista - Kristoffer

//Producera block - Sara
    //Avnänd local storage som databas

//Valideringsfunktion
    //Registreringar av konstverk på användare

//Klass för konstverk - Liza
import ArtList from "./artList.js"
import Art from "./art.js"

let createTitle = document.getElementById("createTitle")
let createOwner = document.getElementById("createOwner")
let createPrice = document.getElementById("createPrice")
let createManYear = document.getElementById("createManYear")
let createArtImage = document.getElementById("createArtImage")
let createArtBtn = document.getElementById("createArtBtn")

createArtBtn.addEventListener('click', () => {
    artCollection.addArt(new Art(createTitle.value, createOwner.value, createPrice.value, createManYear.value, createArtImage.files))
    console.log("artCollection", artCollection)
})

let artCollection = new ArtList()
console.log("artList", artCollection)

    //fetchArtInfo() {
        //Funktion som fetchar manYear och artImage från API.
    //}

//Inloggningsfunktion/Utloggning - Jacob

//Skapa användare

//Profil - Alexander och Felipe
    //Registrera konstverk
    //Skicka konstverk
    //Lista på ägda konstverk

//API
//https://www.programmableweb.com/api/metropolitan-museum-art-met-collection-rest-api-v10

