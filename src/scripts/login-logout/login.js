import buildLogin from "./buildLoginDOM"
import clickEventLogin from "./clickEventLogin"



const loginPage = ()=>{

if (sessionStorage.length < 1){
    buildLogin.loginForm();
    buildLogin.loginButton();
    buildLogin.registerButton();
    clickEventLogin.handleCreateAccount();
    clickEventLogin.handleLogin();
}


if (sessionStorage.length >= 1){
    document.querySelector("#loginContainer").innerHTML = ""
    //rest of click events and building html go in here for Events, Chat, News, Friends, and Tasks



}
}

export default loginPage