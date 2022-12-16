import User from './user.js';
import Transfer from './transfer.js';
import Chain from './chain.js';
import UserList from './userList.js';



const validateBtn = document.getElementById("validateBtn");
const editBtn = document.getElementById("editBtn");
const transferArtBtn = document.getElementById("transferArtBtn");
const sendingUser = document.getElementById("sendingUser");
const receiver= document.getElementById("receiver");
const artID = document.getElementById("artID");
const showTransferList = document.getElementById("showTransferList");

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

let kristoffer = new User("Kristoffer", "hejhej");



console.log(kristoffer);

let currentUsers = new UserList("Site users");
console.log("currentUsers", currentUsers);



let kristoffersArt = [
    {"title": "Mona Lisa", "owner": "Kristoffer", "id": "asdlfkjlxkcjdf", "price": 9999999, "manYear": 1793, "artImage": null},
    {"title": "BAYC #123", "owner": "Kristoffer", "id": "asdfasdfasdfasdf", "price": 1000000, "manYear": 2018, "artImage": null},
    {"title": "En jättefin teckning", "owner": "Kristoffer", "id": "bksdkfdlsjgfsdlkhglfgj", "price": 10, "manYear": 1793, "artImage": null}
];


console.log("kristoffersArt", kristoffersArt);

kristoffer.ownedArt = kristoffersArt;

console.log("kristoffer", kristoffer);

let janne = new User("Janne", "hejdå");

console.log("janne", janne);

janne.ownedArt = [
    {"title": "Stjärnenatt", "owner": "Janne", "id": "fjbpdpdkf", "price": 9999999, "manYear": 1893, "artImage": null},
    {"title": "Flicka med pärlörhänge", "owner": "Janne", "id": "asdfasdfasdfasdf", "price": 1000000, "manYear": 2018, "artImage": null},
    {"title": "Kyssen", "owner": "Janne", "id": "bksdkfdlsjgfsdlkhglfgj", "price": 10, "manYear": 1793, "artImage": null}
];

console.log("janne", janne);

currentUsers.addUser(kristoffer);
currentUsers.addUser(janne);
console.log("currnetUsers", currentUsers);


let artChain = new Chain();

validateBtn.addEventListener("click", () => {
    console.log("Börjar validering");
    artChain.isChainValid();
});

editBtn.addEventListener("click", () => {
    //Vi måste byta ut .work = 20 till något annat. Osäker på vad.
    artChain.artChain[2].data = 20;

    printTransfers();
});

transferArtBtn.addEventListener("click", () => {

    let sender = currentUsers.indexOf(o => o.users.name == sendingUser.value);
    console.log("sender", sender);

    let receivingUser = receiver.value;
    console.log("receivingUser", receivingUser);

    let itemToBeSent = artID.value;
    console.log("itemToBeSent", itemToBeSent);

    // let newTransfer = {
    //     //Här behöver vi lägga in egna värden. Osäker på vad.
    //     from: sendingUser.value,
    //     to: receiver.value,
    //     artID: artID.value
    // }

    // // console.log(newArtTransfer);

    // artChain.addTransfer(new Transfer(newTransfer));


    // setTimeout(printTransfers, 100);
})

function printTransfers() {
    
    showTransfersList.innerHTML = "";

    artChain.artChain.map(transfers => {
        let transferBox = document.createElement("div");
        transferBox.style.border = "1px solid black";
        transferBox.style.padding = "20px";
        transferBox.style.margin = "20px";

        transferBox.id = transfers.id;
        transferBox.innerHTML = "<p>Här ska det skrivas ut info om varje block</p>";

        showTransfersList.appendChild(transferBox);
    })
}








