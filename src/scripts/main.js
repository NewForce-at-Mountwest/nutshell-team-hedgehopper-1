import loginPage from "./login-logout/login"
import addNewsItem from "./News/newsBuilder.js"
import newsAPIMethods from "./News/newsAPImethods.js"
import newsClickEvents from "./News/newsClickEvents.js"

loginPage();
newsAPIMethods.printAllUserArticles()
addNewsItem()
newsClickEvents.addNewsArticle()
newsClickEvents.deleteNewsArticle()
newsClickEvents.editNewsArticle()
newsClickEvents.saveEditedNewsArticle()