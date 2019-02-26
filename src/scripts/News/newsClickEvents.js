import buildArticleObject from "./newsObjectBuilder.js"
import newsAPIMethods from "./newsAPImethods.js"

const newsClickEvents = {
    addNewsArticle: () => {
        document.querySelector("#newsContainer").addEventListener("click", () => {
            if (event.target.id === "saveNewsArticle") {
                const newArticleObject = buildArticleObject()
                newsAPIMethods.postNewArticle(newArticleObject)
                    .then((parsedArticle) => {
                        console.log(parsedArticle)
                    })
                        document.querySelector("#savedNewsArticles").innerHTML = newsAPIMethods.printAllUserArticles()
                        document.querySelector("#articleName").value = ""
                        document.querySelector("#articleSynopsis").value = ""
                        document.querySelector("#articleURL").value = ""
                    }
        })
    }
}


export default newsClickEvents
