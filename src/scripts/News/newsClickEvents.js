import buildArticleObject from "./newsObjectBuilder.js"
import newsAPIMethods from "./newsAPImethods.js"
import buildEditForm from "./buildNewsEditForm.js"

const newsClickEvents = {
    addNewsArticle: () => {
        document.querySelector("#newsContainer").addEventListener("click", () => {
            if (event.target.id === "saveNewsArticle") {
                const newArticleObject = buildArticleObject.buildNewArticleObject()
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
                newsAPIMethods.printAllUserArticles()
            }
        })
    },
    editNewsArticle: () => {
        document.querySelector("#newsContainer").addEventListener("click", () => {
            if (event.target.classList.contains("editBtn")) {
                let articleId = event.target.id.split("-")
                // console.log("Click", articleId, articleId[1])
                newsAPIMethods.getSingleNewsArticle(articleId[1])
                .then((parsedArticle) => {
                    document.querySelector(`#article-${articleId[1]}`).innerHTML = ""
                    buildEditForm(parsedArticle)
                })
                // .then(newsAPIMethods.printAllUserArticles())
            }
        })
    },
    saveEditedNewsArticle: () => {
        document.querySelector("#newsContainer").addEventListener("click", () => {
            if (event.target.classList.contains("saveBtn")) {
                let articleId = event.target.id.split("-")
                console.log("Click", articleId, articleId[1])
                buildArticleObject.buildEditedArticleObject()
            }
        })
    }
}

export default newsClickEvents
