
export default function createAccount() {
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
    }