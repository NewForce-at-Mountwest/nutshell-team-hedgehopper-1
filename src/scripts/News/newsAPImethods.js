const newsAPIMethods = {
    postNewArticle: (articleObject) => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(articleObject)
        })
            .then(postedArticle => postedArticle.json())
    },
    printAllUserArticles: () => {
        fetch("http://localhost:8088/articles")
            // ?userId=${userId}
            .then(userArticles => userArticles.json())
            .then((parsedArticles => {
                parsedArticles.forEach(article => {
                    console.log(article)
                    let articleString = `<article id="article-${article.id}">
                    <h2>${article.artName}<h2>
                    <h4>${article.artSynopsis}</h4>
                    <h4>${article.artURL}</h4>
                    <button id="deleteBtn-${article.id}">Delete This Article</button>
                    </article>
                    <br>`
                    document.querySelector("#savedNewsArticles").innerHTML += articleString
                })
            }))
    }
}
export default newsAPIMethods