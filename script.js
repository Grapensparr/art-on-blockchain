import accountAction from './newAccount.mjs';
import Chain from './chain.js';

const logoutButton = document.getElementById("logoutButton");
const registrateArt = document.getElementById("registrateArt");
const body = document.body;
const footer = document.getElementById("footer");
let createArtBtn = document.getElementById("createArtBtn");
let displayArtInfo = document.getElementById('displayArt');
let gallery = document.getElementById('gallery')
const pageContent = document.getElementById('pageContent')
const displayArtSection = document.getElementById('displayArt')
let artDisplay = document.createElement("div");
let firstGallery = document.createElement("div");

localStorage.getItem("loginStatus")
let loggedInStatus = localStorage.getItem("loginStatus")

let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'? cb(): 
    document.addEventListener('DOMContentLoaded', cb);
}

domReady(() => {
    document.body.style.visibility = 'visible';
});

if (window.location.reload && loggedInStatus === "loggedIn") {
    body.append(logoutButton)
    logoutButton.classList.remove("hidden")
    body.append(registrateArt)
    registrateArt.classList.remove("hidden")
    pageContent.remove()
    gallery.remove()
    body.append(displayArtInfo)
}

accountAction()

/// Footer cookies button
cookiesButton.addEventListener("click", () => {
  footer.remove()
})


createArtBtn.addEventListener("click", async () => {
    artDisplay.innerHTML = ''
    firstGallery.innerHTML = ''
    let chain;
  
    try {
      const newArtChain = localStorage.getItem("artChain");
  
        if (!newArtChain) {
            chain = new Chain();
  
            localStorage.setItem("artChain", JSON.stringify(chain));
  
        } else {
            chain = JSON.parse(localStorage.getItem("artChain"));
            Object.setPrototypeOf(chain, Chain.prototype);
    
            await chain.addTransfer();
    
            localStorage.setItem("artChain", JSON.stringify(chain));
        }
    }

    catch (error) {
      console.error(error);
      alert("Our artChain seems to be broken. Clear your LS and try again.");
    }
    
    displayofChain ();
});

function displayofChain () {
    let artChainArray = JSON.parse(localStorage.getItem('artChain'))

    artChainArray.artChain.map(chain => {
        artDisplay.classList.add("artDisplay")
        artDisplay.innerHTML += 
            "<img src=" + chain.data.artImage +" height='100' width='100' />" +
            "<h3>Title: " + chain.data.title + "</h3>" +
            "<p>Created in " + chain.data.manYear + "<p>" +
            "<p>Owner: " + chain.data.owner + "<p>" +
            "<p>Price: " + chain.data.price + "<p>" +
            "<p>Previous hash: " + chain.prevHash + "<p>" +
            "<p>New hash: " + chain.newHash + "<p>" +
            "<button class='buyArt'>Buy</button>" + 
            "<br><br>" + "<hr>" + "<br>"
            displayArtSection.appendChild(artDisplay)

        firstGallery.classList.add("firstGallery")
        firstGallery.innerHTML += 
            "<img src=" + chain.data.artImage +" height='200' width='200' />"
            gallery.appendChild(firstGallery)
    })  
}

displayofChain ()