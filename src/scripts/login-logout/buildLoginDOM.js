
const loginButtonHTML =  `<div class="button">
<button id="login">Login</button>
</div>`

const loginFormHTML = `<fieldset id="loginForm">
<legend>Login</legend>

<div>
  <label>Username: </label> <input type="text" id="userName" >
</div>
<div>
  <label>Password:</label> <input type="password" id="password">
</div>
</fieldset>`

const registerButtonHTML =  `<div class="button">
<button id="registerButton">Create New Account</button>
</div>`

const registerFormHTML = `<fieldset id="registerForm">
<legend>Create New Account</legend>

<div>
  <label>Create New Username:</label> <input type="text" id="createUserName" >
</div>
<div>
  <label>Create Password:</label> <input type="password" id="createPassword">
</div>
<div>
  <label>Email:</label> <input type="email" id="email">
</div>
</fieldset>`

const completeRegistrationButtonHTML = `<div class="button">
<button id="completeRegistration">Confirm New Account</button>
</div>`

const logoutButton = `<div class="button">
<button id="logout">Logout</button>
</div>`





const buildLogin = {
        loginForm: ()=>{document.querySelector("#loginContainer").innerHTML += loginFormHTML},

        loginButton: () =>{document.querySelector("#loginContainer").innerHTML += loginButtonHTML},

        registerButton: () =>{document.querySelector("#loginContainer").innerHTML += registerButtonHTML},

        registerForm: () =>{document.querySelector("#loginContainer").innerHTML += registerFormHTML},

        completeRegistrationButton: () =>{document.querySelector("#loginContainer").innerHTML += completeRegistrationButtonHTML},

        logout: () =>{document.querySelector("#loginContainer").innerHTML = logoutButton}








}

export default buildLogin

