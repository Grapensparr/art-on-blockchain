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
const artDisplay = document.createElement('div');
const ownArt = document.createElement('div');
const firstGallery = document.createElement('div');
const validateChainBtn = document.getElementById('validateChain');
const validationMessage = document.getElementById('validationMessage');
const validationSuccessMessage = document.createElement('p');
const validationFailMessage = document.createElement('p');
const displayYourArt = document.getElementById('displayYourArt');
const displayAllArt = document.getElementById('displayAllArt');
const ownArtButton = document.getElementById('ownArtBtn');
const ownArtTitle = document.getElementById('ownArtTitle');
const allArtButton = document.getElementById('allArtBtn');
const allArtTitle = document.getElementById('allArtTitle');

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

createArtBtn.addEventListener('click', async () => {
    if (createTitle.value == "" || createManYear.value == "" || createPrice.value == ""){
        alert('All input fields not filled in') 
    } else {
    artDisplay.innerHTML = '';
    firstGallery.innerHTML = '';
    ownArt.innerHTML = ''
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

    displayOwnArt ();
    displayofChain ();
}});

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

function displayOwnArt () {
    const artChainArray = JSON.parse(localStorage.getItem('artChain'));
    console.log(artChainArray)

    const owner = localStorage.getItem('currentLoggedIn')

    const filteredArray = artChainArray.artChain.filter(item => item.data.owner === owner)

    console.log(filteredArray)

    filteredArray.map(chain => {
        ownArt.classList.add('artDisplay');
            ownArt.innerHTML += 
            '<img src=' + chain.data.artImage +' height="100" width="100" />' +
            '<h3>Title: ' + chain.data.title + '</h3>' +
            '<p>Created in ' + chain.data.manYear + '<p>' +
            '<p>Owner: ' + chain.data.owner + '<p>' +
            '<p>Price: ' + chain.data.price + '<p>' +
            '<br><br>' + '<hr>' + '<br>';
            displayYourArt.appendChild(ownArt)
    })
}

displayOwnArt ();

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
            displayAllArt.appendChild(artDisplay);

        firstGallery.classList.add('firstGallery');
        firstGallery.innerHTML += 
            '<img src=' + chain.data.artImage + ' height="200" width="200" />';
            gallery.appendChild(firstGallery);
    })  
}

displayofChain ();

ownArtButton.addEventListener('click', () => {
    artDisplay.remove();
    allArtTitle.remove();
    displayYourArt.appendChild(ownArtTitle);
    displayYourArt.appendChild(ownArt);
});

allArtButton.addEventListener('click', () => {
    displayAllArt.appendChild(allArtTitle);
    displayAllArt.appendChild(artDisplay);
    ownArt.remove();
    ownArtTitle.remove()
});