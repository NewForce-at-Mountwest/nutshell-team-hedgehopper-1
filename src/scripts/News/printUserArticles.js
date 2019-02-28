import newsAPImethods from "./newsAPImethods.js"

const printUserArticles = () => {
    let userId = sessionStorage.getItem("userId")
    newsAPImethods.printAllUserArticles(userId)
        .then((parsedArticles) => {
            // console.log(parsedArticles)
        })
    }