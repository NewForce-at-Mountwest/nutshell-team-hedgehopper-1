import buildLogin from "./buildLoginDOM"
import clickEventLogin from "./clickEventLogin"


const loginPage = ()=>{


    buildLogin.loginForm();
    buildLogin.loginButton();
    buildLogin.registerButton();
    // clickEventLogin.handleCreateAccount();
    // clickEventLogin.handleLogin();


}

export default loginPage