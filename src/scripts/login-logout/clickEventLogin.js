import loginApiManager from "./loginApiManager"
import buildLogin from "./buildLoginDOM"
import loginPage from "./login"


const clickEventLogin = {

    //login button should load the main home page if passwords match the db.json
    handleLogin: () => {
        document.querySelector("#login").addEventListener("click", () => {
            const userNameVal = document.querySelector("#userName").value
            const userPasswordVal = document.querySelector("#password").value



            loginApiManager.checkLogin(userNameVal)
                .then(taco => {
                    console.log(taco)
                    console.log(userPasswordVal)

                    if(taco.length <1){
                        alert("USERNAME/PASSWORD DOES NOT EXIST")
                    }

                    else if(taco[0].password === userPasswordVal) {
                        console.log("success")
                        sessionStorage.setItem("userId", taco[0].id)
                        document.querySelector("#loginContainer").innerHTML = ""
                        buildLogin.logout();
                        clickEventLogin.handleLogout();
                        //************  All main page stuff(click events) needs to flow to here  ***********
                    }
                    else{
                        alert("Username doesnt exist!")
                    }

                })
        })
    },

    //this is the button on the registration form that posts the new user to the db.json
    handleRegistration: () => {
        document.querySelector("#completeRegistration").addEventListener("click", () => {

            const newUserName = document.querySelector("#createUserName").value
            const newUserPass = document.querySelector("#createPassword").value
            const newUserEmail = document.querySelector("#email").value

            const newUser = {
                name: newUserName,
                password: newUserPass,
                email: newUserEmail
            }
            console.log(newUser)
            //check to see username and email are already taken in db.json
            var counter = 0;
            loginApiManager.allUsers()
                .then((taco) => {

                    taco.forEach((x) => {

                        if (x.password === newUserPass || x.email === newUserEmail) {
                            counter = counter + 1;
                            alert("The username or email you entered has already been used, please choose a different username and email")

                        }
                    })


                    //if username and email are unique then counter will be 0
                    if (counter < 1) {
                        loginApiManager.postNewUser(newUser)
                        document.querySelector("#loginContainer").innerHTML = ""
                        loginPage();
                    }

                })

        })
    },
    //this brings up a registration form to make a new account
    handleCreateAccount: () => {
        document.querySelector("#registerButton").addEventListener("click", () => {
            document.querySelector("#loginContainer").innerHTML = ""
            buildLogin.registerForm();
            buildLogin.completeRegistrationButton();
            clickEventLogin.handleRegistration();

        })
    },


    handleLogout: () => {
        document.querySelector("#logout").addEventListener("click", () => {
            console.log("you clicked logout")
            sessionStorage.clear()
            document.querySelector("#loginContainer").innerHTML = ""
            loginPage();

        })
    }


}

export default clickEventLogin













