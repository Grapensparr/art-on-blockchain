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
let displayArtInfo = document.getElementById('displayArt')

createArtBtn.addEventListener('click', () => {
    artCollection.addArt(new Art(createTitle.value, createOwner.value, createPrice.value, createManYear.value, createArtImage.files))
    console.log(artCollection)
    let artCollectionArray = JSON.parse(localStorage.getItem("artCollectionArray"))
    displayArtInfo.innerHTML = ""
    for (let i = 0; i < artCollectionArray.length; i += 1) {
        if(artCollectionArray.length > 2){
            displayArtInfo.innerHTML += `
            <img src="${artCollectionArray[i].artImage}" height="100" width="100" />
            <div class="art-content">
              <div class="art-info">
                <h3>${artCollectionArray[i].title}</h3>
                <p>${artCollectionArray[i].owner}</p>
                <p>${artCollectionArray[i].manYear}</p>
                <p>${artCollectionArray[i].price}</p>
              </div>
            </div>
            `
        }
    }
})

let artCollection = new ArtList()
console.log(artCollection)

function displayArt() {
    let artCollectionArray = JSON.parse(localStorage.getItem("artCollectionArray"))
    for (let i = 0; i < artCollectionArray.length; i += 1) {
        if(artCollectionArray.length < 3){
            displayArtInfo.innerHTML += `
            <img src="${artCollectionArray[i].artImage}" height="100" width="100" />
            <div class="art-content">
              <div class="art-info">
                <h3>${artCollectionArray[i].title}</h3>
                <p>${artCollectionArray[i].owner}</p>
                <p>${artCollectionArray[i].manYear}</p>
                <p>${artCollectionArray[i].price}</p>
              </div>
            </div>
            `
        }
    }
}

displayArt()

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

