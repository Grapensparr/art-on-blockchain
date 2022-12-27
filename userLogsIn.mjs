const username = document.getElementById('username');
const logoutButton = document.getElementById('logoutButton');
const registrateArt = document.getElementById('registrateArt');
const body = document.body;
const displayArtInfo = document.getElementById('displayArt');
const pageContent = document.getElementById('pageContent');
const gallery = document.getElementById('gallery');

export default function userLogsIn() {
    body.append(logoutButton);
    logoutButton.classList.remove('hidden');
    body.append(registrateArt);
    registrateArt.classList.remove('hidden');
    pageContent.remove();
    body.append(displayArtInfo);
    gallery.remove();
}