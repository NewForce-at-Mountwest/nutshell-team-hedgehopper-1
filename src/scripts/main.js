import buildLogin from "./buildLoginDOM"
import loginClicks from "./loginClicks"




if(sessionStorage.length<1){
    buildLogin.loginForm();
    buildLogin.loginButton();
    buildLogin.registerButton();

}

else{
   console.log(loginClicks.clickLogin())
}




