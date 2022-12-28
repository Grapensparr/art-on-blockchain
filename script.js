import accountAction from './accountAction.mjs';
import Chain from './chain.js';
import isChainValid from './isChainValid.js';

const logoutButton = document.getElementById('logoutButton');
const registrateArt = document.getElementById('registrateArt');
const body = document.body;
const footer = document.getElementById('footer');
const createArtBtn = document.getElementById('createArtBtn');
const displayArtInfo = document.getElementById('displayArt');
const gallery = document.getElementById('gallery');
const pageContent = document.getElementById('pageContent');
const displayArtSection = document.getElementById('displayArt');
const artDisplay = document.createElement('div');
const firstGallery = document.createElement('div');
const validateChainBtn = document.getElementById('validateChain');
const validationMessage = document.getElementById('validationMessage');
const validationSuccessMessage = document.createElement('p');
const validationFailMessage = document.createElement('p');
const saveArtInfo = document.getElementById('randomizeImage');
const createTitle = document.getElementById('createTitle');
const createManYear = document.getElementById('createManYear');
const createPrice = document.getElementById('createPrice');

let loggedInStatus = localStorage.getItem('loginStatus');
logoutButton.remove();
registrateArt.remove();

let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'? cb(): 
    document.addEventListener('DOMContentLoaded', cb);
}

domReady(() => {
    document.body.style.visibility = 'visible';
});

if (window.location.reload && loggedInStatus === 'loggedIn') {
    body.append(logoutButton);
    body.append(registrateArt);
    pageContent.remove();
    gallery.remove();
    body.append(displayArtInfo);
}

accountAction();

cookiesButton.addEventListener('click', () => {
  footer.remove();
})

saveArtInfo.addEventListener('click', () => {
    localStorage.setItem('createTitle', createTitle.value);
    localStorage.setItem('createManYear', createManYear.value);
    localStorage.setItem('createPrice', createPrice.value);
})

createArtBtn.addEventListener('click', async () => {
    artDisplay.innerHTML = '';
    firstGallery.innerHTML = '';
    let chain;
  
    try {
      const newArtChain = localStorage.getItem('artChain');
  
        if (!newArtChain) {
            chain = new Chain();
  
            localStorage.setItem('artChain', JSON.stringify(chain));
  
        } else {
            chain = JSON.parse(localStorage.getItem('artChain'));
            Object.setPrototypeOf(chain, Chain.prototype);
    
            await chain.addTransfer();
    
            localStorage.setItem('artChain', JSON.stringify(chain));
            
            isChainValid(chain);
        }
    }

    catch (error) {
      console.error(error);
      alert('Our artChain seems to be broken. Clear your LS and try again.');
    }

    displayofChain ();
});

validateChainBtn.addEventListener('click', () => {
    if (localStorage.getItem('validation') === 'success') {
        validationSuccessMessage.style.color = 'darkgreen';
        validationSuccessMessage.innerHTML = 'The chain is valid!';
        validationMessage.appendChild(validationSuccessMessage);

        var timeout = 0;
        timeout = setTimeout(function() {
            validationSuccessMessage.remove();
            timeout = 0;
          }, 3000)

    } else if (localStorage.getItem('validation') === 'failure') {
        validationFailMessage.style.color = 'darkred';
        validationFailMessage.innerHTML = 'The chain is invalid!';
        validationMessage.appendChild(validationFailMessage);

        var timeout = 0;
        timeout = setTimeout(function() {
            validationFailMessage.remove();
            timeout = 0;
          }, 3000);

    } else {
        validationFailMessage.style.color = 'red';
        validationFailMessage.innerHTML = 'There are not enough blocks to validate the chain. Please register more art!';
        validationMessage.appendChild(validationFailMessage);

        var timeout = 0;
        timeout = setTimeout(function() {
            validationFailMessage.remove();
            timeout = 0;
          }, 3000);
    }
})

function displayofChain () {
    let artChainArray = JSON.parse(localStorage.getItem('artChain'));

    artChainArray.artChain.map(chain => {
        artDisplay.classList.add('artDisplay');
        artDisplay.innerHTML += 
            '<img src=' + chain.data.artImage +' height="100" width="100" />' +
            '<h3>Title: ' + chain.data.title + '</h3>' +
            '<p>Created in ' + chain.data.manYear + '<p>' +
            '<p>Owner: ' + chain.data.owner + '<p>' +
            '<p>Price: ' + chain.data.price + '<p>' +
            '<p>Previous hash: ' + chain.prevHash + '<p>' +
            '<p>New hash: ' + chain.newHash + '<p>' +
            '<button class="buyArt">Buy</button>' + 
            '<br><br>' + '<hr>' + '<br>';
            displayArtSection.appendChild(artDisplay);

        firstGallery.classList.add('firstGallery');
        firstGallery.innerHTML += 
            '<img src=' + chain.data.artImage + ' height="200" width="200" />';
            gallery.appendChild(firstGallery);
    })  
}

displayofChain ();