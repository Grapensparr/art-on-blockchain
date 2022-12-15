import User from './user.js';
import Transfer from './transfer.js';
import Chain from '.chain.js';
import UserList from './userList.js';

const validateBtn = document.getElementById("validateBtn");
const editBtn = document.getElementById("editBtn");
const transferArtBtn = document.getElementById("transferArtBtn");

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
    //ID
    //Vem som äger verket
    //Titel
    //Pris
    //Ägare
    //Tillverkningsår

    // fetchArtInfo() {
    //     //Funktion som fetchar manYear och artImage från API.
    // }

//Inloggningsfunktion/Utloggning - Jacob

//Skapa användare

//Profil - Alexander och Felipe
    //Registrera konstverk
    //Skicka konstverk
    //Lista på ägda konstverk

//API
//https://www.programmableweb.com/api/metropolitan-museum-art-met-collection-rest-api-v10

// let kristoffer = new User("Kristoffer", "hejhej");

// kristoffer.listOwnedArt();

// console.log(kristoffer);

// let currentUsers = new UserList("Site users");
// console.log("currentUsers", currentUsers);

// currentUsers.addUser(kristoffer);
// console.log("currnetUsers", currentUsers);

let artChain = new Chain();

validateBtn.addEventListener("click", () => {
    console.log("Börjar validering");
    artChain.isChainValid();
});

editBtn.addEventListener("click", () => {
    //Vi måste byta ut .work = 20 till något annat. Osäker på vad.
    artChain.artChain[2].data.work = 20;

    printTransfers();
});

transferArtBtn.addEventListener("click", () => {

    let newArtTransfer = {
        //Här behöver vi lägga in egna värden. Osäker på vad.
        user: user.value,
        work: Number(work.value)
    }

    artChain.addtransfer(new transfer(newtransfer));


    setTimeout(printTransfers, 100);
})







