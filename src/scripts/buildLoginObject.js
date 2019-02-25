const buildLoginObjects = {
     handleLogin: () => {document.querySelector("#login").addEventListener("click", ()=>{
        const userNameVal = document.querySelector("#username").value
        const userPasswordVal = document.querySelector("#password").value

        return  {
            name:userNameVal,
            password:userPasswordVal
        }
})},

    handleRegistration: () =>{document.querySelector("#completeRegistration").addEventListener("click", ()=>{
        const newUserName = document.querySelector("#createUserName").value
        const newUserPass = document.querySelector("#createPassword").value
        const newUserEmail = document.querySelector("#email").value

        return  {
            name: newUserName,
            password: newUserPass,
            email: newUserEmail
        }
})},


}

export default buildLoginObjects











