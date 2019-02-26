import addNewsItem from "./News/newsBuilder.js"
import newsAPIMethods from "./News/newsAPIMethods.js"
import newsClickEvents from "./News/newsClickEvents.js"

newsAPIMethods.printAllUserArticles()
addNewsItem()
newsClickEvents.addNewsArticle()