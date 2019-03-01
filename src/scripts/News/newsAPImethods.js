//handles API calls
const newsAPIMethods = {
    //posts new article to API
    postNewArticle: (articleObject) => {
        return fetch("http://localhost:8088/newsArticles", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(articleObject)
        })
            // .then(postedArticle => postedArticle.json())
    },
    //prints all user's articles to DOMtainer
    printAllUserArticles: () => {
        const userId = sessionStorage.getItem("userId")
        fetch(`http://localhost:8088/newsArticles/?userId=${userId}`)
            .then(userArticles => userArticles.json())
            .then((parsedArticles => {
                // console.log(parsedArticles)

                const sortedArray = parsedArticles.sort(function(a, b) {
                return b.timestamp-a.timestamp
                })
                // console.log(sortedArray)

                    sortedArray.forEach(article => {
                        // console.log(article)
                    let articleString = `<article id="article-${article.id}" class="newsArticle">
                    <h3>${article.artName}<h3>
                    <p>${article.artSynopsis}<p>
                    <a href="${article.artURL}">${article.artURL}</a><br>
                    <br>
                    <button id="editBtn-${article.id}" class="editBtn">Edit This Saved Article</button>
                    <button id="deleteBtn-${article.id}" class="deleteBtn">Delete This Article</button>
                    </article>
                    <br>`
                    document.querySelector("#savedNewsArticles").innerHTML += articleString
                })
            }
            ))
    },

    //removes article from API
    deleteNewsArticle: (articleId) => {
            return fetch(`http://localhost:8088/newsArticles/${articleId}`, {
                method: "DELETE"
            })
    },

    //retrieves single article from API
    getSingleNewsArticle: (articleId) => {
          return fetch(`http://localhost:8088/newsArticles/${articleId}`)
                .then(singleArticle => singleArticle.json())
    },

    //puts edited article to API
    putEditedArticle: (articleId, editedArticleObject) => {
        return fetch(`http://localhost:8088/newsArticles/${articleId}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(editedArticleObject)
            })
    }
}








export default newsAPIMethods