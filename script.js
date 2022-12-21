import User from './user.js';
import Transfer from './transfer.js';
import Chain from './chain.js';
import UserList from './userList.js';
import ArtList from "./artList.js";
import Art from "./art.js";
import reloadLoginStatus from "./logoutStatus.mjs";
import registerArt from './registerArt.mjs';
import displayArt from './displayArt.js';
import newAccount from './newAccount.mjs';

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
const registrateArt = document.getElementById("registrateArt");

registrateArt.style.display = "none";

//Login Form
function getLoginForm() {
    loginButton1.addEventListener("click", () => {
    loginForm.style.display = "block";
    })
}

//Create new account
newAccount();         

///Login
// loginButton2.addEventListener("click", () => { 
//     login();
// })

//Close login form
closeButton.addEventListener("click", () => {
    loginForm.style.display = "none";
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

displayArt();
getLoginForm();

let kristoffer = new User("Kristoffer", "hejhej");

console.log(kristoffer);

let userArray = new UserList("Site users");
console.log("currentUsers", userArray);



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

userArray.addUser(kristoffer);
userArray.addUser(janne);
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

// Remember latest location on reload
if (window.location.reload) {
    JSON.parse(localStorage.getItem("userArray"))
  }