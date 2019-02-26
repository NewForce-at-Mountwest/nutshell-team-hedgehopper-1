import buildArticleObject from "./newsObjectBuilder.js"
import newsAPIMethods from "./newsAPImethods.js"

const newsClickEvents = {
    addNewsArticle: () => {
        document.querySelector("#newsContainer").addEventListener("click", () => {
            if (event.target.id === "saveNewsArticle") {
                const newArticleObject = buildArticleObject()
                newsAPIMethods.postNewArticle(newArticleObject)
                    .then((parsedArticle) => {
                        // console.log(parsedArticle)
                        document.querySelector("#savedNewsArticles").innerHTML = ""
                        document.querySelector("#articleName").value = ""
                        document.querySelector("#articleSynopsis").value = ""
                        document.querySelector("#articleURL").value = ""
                        newsAPIMethods.printAllUserArticles()
                    })
            }
        })
    },
    deleteNewsArticle: () => {
        document.querySelector("#newsContainer").addEventListener("click", () => {
            if (event.target.classList.contains("deleteBtn")) {
                let articleId = event.target.id.split("-")
                console.log("Click", articleId, articleId[1])
                newsAPIMethods.deleteNewsArticle(articleId[1])
                // .then(newsAPIMethods.printAllUserArticles())
            }
        })
    },
    // editNewsArticle: () => {
    //     document.querySelector("#newsContainer").addEventListener("click", () => {
    //         if (event.target.classList.contains("editBtn")) {
    //         let articleId = event.target.id.split("-")
    //         console.log("Click", articleId, articleId[1])
    //         // newsAPIMethods.editNewsArticle(articleId[1])
    //         // .then(newsAPIMethods.printAllUserArticles())
}


export default newsClickEvents
