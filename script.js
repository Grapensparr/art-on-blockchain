import User from './user.js';
import Transfer from './transfer.js';
import Chain from './chain.js';
import UserList from './userList.js';
import ArtList from "./artList.js";
import Art from "./art.js";
import reloadLoginStatus from "./loginStatus.mjs";
import registerArt from './registerArt.mjs';
import login from './login.mjs';
import createAccount from './newAccount.mjs';
import showLoginForm from './showLoginForm.mjs';


//Inloggningsfunktion/Utloggning - Jacob
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginForm = document.getElementById("loginForm");
const closeButton = document.getElementById("closeButton");
const loginButton1 = document.getElementById("loginButton1");
const loginButton2 = document.getElementById("loginButton2");
const createButton = document.getElementById("createButton");
const validateBtn = document.getElementById("validateBtn");
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

 //List of users
let objUsers = [
    {username:"sara", password:"test"},
];
 
document.getElementById("registrateArt").style.display = "none";

//Login Form


if (localStorage.getItem("objUsers")) {
   //Do nothing
} else {
    localStorage.setItem('objUsers', JSON.stringify(objUsers));
}


//Create new account
createButton.addEventListener("click", () => {
    createAccount()
    })

loginButton2.addEventListener("click", () => { 
 login()
})

closeButton.addEventListener("click", () => {
    document.getElementById("loginForm").style.display = "none";
  })


window.onload = reloadLoginStatus(localStorage.getItem("loginStatus"))



  /// Footer cookies button
  cookiesButton.addEventListener("click", () => {
    document.getElementById("footer").style.display = "none";
  })

createArtBtn.addEventListener('click', () => {
    registerArt();
})

let artCollection = new ArtList()
console.log(artCollection)

displayArt()
showLoginForm();

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

let newArt = new Art("x", "x",);

console.log(newArt);

artCollection.addArt(newArt);
console.log(newArt.artImage);

console.log(artCollection);


janne.ownedArt = [
    {newArt},
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








