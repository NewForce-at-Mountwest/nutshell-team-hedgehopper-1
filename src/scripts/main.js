// import chatAPI from "../chatFiles/chatAPI";
// import chatDom from "../chatFiles/chatDom";
import chatClickEvents from "./chatFiles/chatClickEvents";
import loginPage from "./login-logout/login";
import newsClickEvents from "./News/newsClickEvents.js"
import newsClickEvents from "./News/newsClickEvents.js"
import clickEvents from "./events/clickEvents"
import clickEventLogin from "./login-logout/clickEventLogin.js"
// chatAPI.getComment()
// .then((word) => {
//     console.log(word)
// })

// chatDom()
chatClickEvents.postNewComment()
chatClickEvents.editComment()

// import addNewsItem from "./News/newsBuilder.js"
// import newsAPIMethods from "./News/newsAPImethods.js"

//Login

loginPage();
clickEventLogin.handleCreateAccount();
clickEventLogin.handleLogin();
clickEventLogin.handleLogout();
clickEventLogin.handleRegistration();
clickEvents.closeEventForm();


// addNewsItem()
// newsAPIMethods.printAllUserArticles()
// newsClickEvents.addNewsArticle()
// newsClickEvents.deleteNewsArticle()
// newsClickEvents.editNewsArticle()
// newsClickEvents.saveEditedNewsArticle()
newsClickEvents.addNewsArticle()
newsClickEvents.deleteNewsArticle()
newsClickEvents.editNewsArticle()
newsClickEvents.saveEditedNewsArticle()


//Events
clickEvents.deleteEvent()
clickEvents.newForm();
clickEvents.saveEvent();









