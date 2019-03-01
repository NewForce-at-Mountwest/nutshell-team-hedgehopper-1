import loginPage from "./login-logout/login"
// import addNewsItem from "./News/newsBuilder.js"
// import newsAPIMethods from "./News/newsAPImethods.js"
import newsClickEvents from "./News/newsClickEvents.js"
import clickEvents from "./events/clickEvents"
import clickEventLogin from "./login-logout/clickEventLogin.js"
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









