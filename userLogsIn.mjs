const username = document.getElementById('username');
const logoutButton = document.getElementById('logoutButton');
const registrateArt = document.getElementById('registrateArt');
const body = document.body;
const pageContent = document.getElementById('pageContent');
const gallery = document.getElementById('gallery');
const displayYourArt = document.getElementById('displayYourArt');
const displayAllArt = document.getElementById('displayAllArt');
const ownArtTitle = document.getElementById('ownArtTitle');

export default function userLogsIn() {
    body.append(logoutButton);
    logoutButton.classList.remove('hidden');
    body.append(registrateArt);
    registrateArt.classList.remove('hidden');
    pageContent.remove();
    displayYourArt.remove();
    body.append(displayAllArt);
    gallery.remove();
}