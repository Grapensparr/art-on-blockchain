export default function login() {
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
}