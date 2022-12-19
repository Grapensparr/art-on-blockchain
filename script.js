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
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginForm = document.getElementById("loginForm");
const closeButton = document.getElementById("closeButton");
const loginButton1 = document.getElementById("loginButton1");
const loginButton2 = document.getElementById("loginButton2");
const createButton = document.getElementById("createButton");

 //List of users
let objUsers = [
    {username:"sara", password:"test"},
];
 
document.getElementById("registrateArt").style.display = "none";

//Login Form
    function showLoginForm() {
        loginButton1.addEventListener("click", () => {
            document.getElementById("loginForm").style.display = "block";
          })
       }
 

if (localStorage.getItem("objUsers")) {
   //Do nothing
} else {
    localStorage.setItem('objUsers', JSON.stringify(objUsers));
}


//Create new account
createButton.addEventListener("click", () => {
    
    let newUser = document.getElementById("newUser").value;
    let newPassword = document.getElementById("newPassword").value;
    

    if (username == "") {
        alert("Please enter Username");
    }
        else if (password == "") {
            alert("Please enter Password");
        }
       
        else {      
            let objUsers = JSON.parse(localStorage.getItem("objUsers"));
    
            let newRegister = {
                username: newUser,
                password: newPassword
            };

            objUsers.push(newRegister);
        
            localStorage.setItem("objUsers", JSON.stringify(objUsers));
    
            alert("Account created!");

            showLoginForm();
           
        }
    })

loginButton2.addEventListener("click", () => { 
    let objUsers = JSON.parse(localStorage.getItem("objUsers"));
    let findUser = objUsers.find(findUser => findUser.username === username.value)
        if (findUser && findUser.password === password.value) {
            //Logged in View?
        document.getElementById("aboutContent").style.display = "none";
      document.getElementById("instructionsContent").style.display = "none";
      document.getElementById("registrateArt").style.display = "block";
        localStorage.setItem("loginStatus", "loggedIn");
        localStorage.setItem("currentLoggedIn", username.value);
        return;
    } else {
        alert("User not found");
    }
})

closeButton.addEventListener("click", () => {
    document.getElementById("loginForm").style.display = "none";
  })

  function reloadLoginStatus(loginStatus) {
    let currentLoggedIn = localStorage.getItem("currentLoggedIn");
    if (loginStatus === null) {
        //Do nothing
    } else if (loginStatus === "loggedIn") {
      //Logged in view?
      document.getElementById("aboutContent").style.display = "none";
      document.getElementById("instructionsContent").style.display = "none";
      document.getElementById("registrateArt").style.display = "block";
      logoutButton.addEventListener("click", () => {
        document.getElementById("aboutContent").style.display = "block";
        document.getElementById("instructionsContent").style.display = "block";
        document.getElementById("registrateArt").style.display = "none";
        localStorage.removeItem("loginStatus");
        localStorage.removeItem("currentLoggedIn");
    })
    }
}
window.onload = reloadLoginStatus(localStorage.getItem("loginStatus"))



  /// Footer cookies button
  cookiesButton.addEventListener("click", () => {
    document.getElementById("footer").style.display = "none";
  })
  
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








