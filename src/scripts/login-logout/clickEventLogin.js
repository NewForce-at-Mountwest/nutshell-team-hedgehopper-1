import loginApiManager from "./loginApiManager"
import buildLogin from "./buildLoginDOM"




const clickEventLogin = {


    handleLogin: () => {document.querySelector("#login").addEventListener("click", ()=>{
        const userNameVal = document.querySelector("#userName").value
        const userPasswordVal = document.querySelector("#password").value



        loginApiManager.checkLogin(userNameVal)
           .then(taco => {
               console.log(taco)

               console.log(userPasswordVal)
               if(taco[0].password===userPasswordVal){
                   console.log("success")
                   sessionStorage.setItem("userId", taco[0].id)
                   location.reload();
               }
           })
})},

    handleRegistration: () =>{document.querySelector("#completeRegistration").addEventListener("click", ()=>{

        const newUserName = document.querySelector("#createUserName").value
        const newUserPass = document.querySelector("#createPassword").value
        const newUserEmail = document.querySelector("#email").value

        const newUser =   {
            name: newUserName,
            password: newUserPass,
            email: newUserEmail
        }
        console.log(newUser)

        loginApiManager.postNewUser(newUser)
        document.querySelector("#loginContainer").innerHTML = ""
        buildLogin.loginForm();
        buildLogin.loginButton();
        buildLogin.registerButton();
        clickEventLogin.handleLogin();
        clickEventLogin.handleCreateAccount();

})},

    handleCreateAccount: () => {document.querySelector("#registerButton").addEventListener("click", ()=>{
        document.querySelector("#loginContainer").innerHTML = ""
        buildLogin.registerForm();
        buildLogin.completeRegistrationButton();
        clickEventLogin.handleRegistration();

    })}


}

export default clickEventLogin













