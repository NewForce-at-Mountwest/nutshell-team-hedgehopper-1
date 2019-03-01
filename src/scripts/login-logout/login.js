import buildLogin from "./buildLoginDOM"
import clickEventLogin from "./clickEventLogin"
// import chatAPI from "../chatFiles/chatAPI";
// import chatDom from "../chatFiles/chatDom";
// import chatClickEvents from "../chatFiles/chatClickEvents";



const loginPage = ()=>{

    buildLogin.loginForm();
    buildLogin.loginButton();
    buildLogin.registerButton();
    clickEventLogin.handleCreateAccount();
    clickEventLogin.handleLogin();

}



export default loginPage