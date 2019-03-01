
import afterLoad from "./tasks/loadTasksContent"

afterLoad();


// import chatAPI from "../chatFiles/chatAPI";
// import chatDom from "../chatFiles/chatDom";
import chatClickEvents from "./chatFiles/chatClickEvents";
import loginPage from "./login-logout/login";
import newsClickEvents from "./News/newsClickEvents.js"

// chatAPI.getComment()
// .then((word) => {
//     console.log(word)
// })

// chatDom()
chatClickEvents.postNewComment()
chatClickEvents.editComment()

// import addNewsItem from "./News/newsBuilder.js"
// import newsAPIMethods from "./News/newsAPImethods.js"

loginPage();
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