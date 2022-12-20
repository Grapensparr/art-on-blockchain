export default function reloadLoginStatus(loginStatus) {
    let currentLoggedIn = localStorage.getItem("currentLoggedIn");
    if (loginStatus === null) {
        //Do nothing
    } else if (loginStatus === "loggedIn") {
      //Logged in view?
      document.getElementById("aboutContent").style.display = "none";
      document.getElementById("instructionsContent").style.display = "none";
      document.getElementById("registrateArt").style.display = "block";
      document.getElementById('displayArt').style.display = "block";
      logoutButton.addEventListener("click", () => {
        document.getElementById("aboutContent").style.display = "block";
        document.getElementById("instructionsContent").style.display = "block";
        document.getElementById("registrateArt").style.display = "none";
        document.getElementById('displayArt').style.display = "none";
        localStorage.removeItem("loginStatus");
        localStorage.removeItem("currentLoggedIn");
    })
    }
}