import newsAPImethods from "./newsAPImethods.js"

const printUserArticles = () => {
    const userId = sessionStorage.getItem("userId")
    newsAPImethods.printAllUserArticles(userId)
        .then((parsedArticles) => {
            // console.log(parsedArticles)
        })
    }