const displayArtInfo = document.getElementById('displayArt');
const registrateArt = document.getElementById("registrateArt");
const instructionsContent = document.getElementById("instructionsContent");
const aboutContent = document.getElementById("aboutContent");

export default function () {
      logoutButton.addEventListener("click", () => {
        aboutContent.style.display = "block";
        instructionsContent.style.display = "block";
        displayArtInfo.style.display = "none";
        registrateArt.style.display = "none";
        localStorage.removeItem("loginStatus");
        localStorage.removeItem("currentLoggedIn");
    })
    }