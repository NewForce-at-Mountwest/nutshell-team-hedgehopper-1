import buildLoginObjects from "./buildLoginObject"



const loginClicks = {
    clickLogin: () => {
        buildLoginObjects.handleLogin()
    }
}




export default loginClicks

























// const handleLogin = () => {document.querySelector("#login").addEventListener("click", ()=>{
//     const userNameVal = document.querySelector("#userName").value
//     const userPasswordVal = document.querySelector("#password").value
//     console.log(userNameVal)

//     apiManager.fetchUserByName(userNameVal)
//         .then((singleUser) =>{
//             const usersID =singleUser[0].id
//             if(userID.password === userPasswordVal ){
//                 sessionStorage.setItem("userId", usersID )
//                 console.log(sessionStorage.getItem("userId"))
//                 build.Form();
//                 build.Button();
//                 build.createLogoutButton();
//                 console.log(usersID);
//                 saveContact();
//                 // printDOM();
//                 handleLogout();
//                 document.querySelector("#formArea2").innerHTML = "";
//                 document.querySelector("#ButtonArea2").innerHTML = ""

//             }
//             else {
//                         console.warn("ur wrong")}
//         })



// })}




//   export default handleLogin
