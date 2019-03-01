// import chatAPI from "../chatFiles/chatAPI";
// import chatDom from "../chatFiles/chatDom";
import chatClickEvents from "./chatFiles/chatClickEvents";
import loginPage from "./login-logout/login";


// chatAPI.getComment()
// .then((word) => {
//     console.log(word)
// })

// chatDom()
chatClickEvents.postNewComment()
chatClickEvents.editComment()

loginPage();






