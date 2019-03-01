import loginApiManager from "./loginApiManager"
import buildLogin from "./buildLoginDOM"
import loginPage from "./login"
import events from "../events/events.js"
import chatDom from "../chatFiles/chatDom";
import chatClickEvents from "../chatFiles/chatClickEvents";

// news functions import below
import addNewsItem from "../News/NewsBuilder.js"
import newsAPIMethods from "../News/newsAPImethods.js"
import newsClickEvents from "../News/newsClickEvents.js"


const clickEventLogin = {

    //login button should load the main home page if passwords match the db.json
    handleLogin: () => {
        document.querySelector("#loginContainer").addEventListener("click", () => {
            if(event.target.id==="login"){
                const userNameVal = document.querySelector("#userName").value
                const userPasswordVal = document.querySelector("#password").value
                console.log(userNameVal)



            loginApiManager.checkLogin(userNameVal)
                .then(taco => {
                    console.log(taco)
                    console.log(userPasswordVal)

                    if (taco.length < 1) {
                        alert("USERNAME/PASSWORD DOES NOT EXIST!")
                    }

                    else if (taco[0].password === userPasswordVal) {
                        console.log("success")
                        sessionStorage.setItem("userId", taco[0].id)
                        document.querySelector("#loginContainer").innerHTML = ""
                        //************  All main page stuff(click events) needs to flow to here  ***********



                        // news clickevents below
                        addNewsItem()
                        newsAPIMethods.printAllUserArticles()
                        //************ Chat Functions *************/
                        chatDom();
                        //  chatClickEvents.postNewComment()
                        //  chatClickEvents.editComment()

                        buildLogin.logout();
                        // clickEventLogin.handleLogout();
                        //************  All main page stuff(click events) needs to flow to here  ***********
                       //events
                        events.event()
                        // clickEventLogin.handleLogout();




                    }
                    else {
                        alert("USERNAME/PASSWORD DOES NOT EXIST!")
                    }

                })
            }

        })
    },

    //this is the button on the registration form that posts the new user to the db.json
    handleRegistration: () => {
        document.querySelector("#loginContainer").addEventListener("click", () => {
            if(event.target.id==="completeRegistration"){
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
            }



        })
    },
    //this brings up a registration form to make a new account
    handleCreateAccount: () => {

        document.querySelector("#loginContainer").addEventListener("click", () => {
            if(event.target.id==="registerButton"){
            document.querySelector("#loginContainer").innerHTML = ""
            buildLogin.registerForm();
            buildLogin.completeRegistrationButton();
            // clickEventLogin.handleRegistration();
            }


        })
    },


    handleLogout: () => {
        document.querySelector("#loginContainer").addEventListener("click", () => {
            if(event.target.id==="logout"){
                console.log("you clicked logout")
            sessionStorage.clear()
            document.querySelector("#loginContainer").innerHTML = ""
            document.querySelector("#eventFormArea").innerHTML=""
            document.querySelector("#eventDOMarea").innerHTML=""
            document.querySelector("#chatContainer"). innerHTML = ""
            document.querySelector("#newsContainer").innerHTML = ""
            loginPage();
            }


        })
    }


}

export default clickEventLogin













