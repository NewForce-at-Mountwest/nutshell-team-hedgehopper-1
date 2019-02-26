import buildLogin from "./buildLoginDOM"
import clickEventLogin from "./clickEventLogin"
import chatAPI from "./chatFiles/chatAPI";
import chatDom from "./chatFiles/chatDom";
import chatClickEvents from "./chatFiles/chatClickEvents";


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
    chatAPI.getComment()
.then((word) => {
    console.log(word)
})

chatDom()
chatClickEvents.postNewComment()
chatClickEvents.editComment()
}
}

export default loginPage