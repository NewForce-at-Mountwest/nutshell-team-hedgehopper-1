import newsAPImethods from "./newsAPImethods.js"

const printUserArticles = () => {
    newsAPImethods.printAllUserArticles(userId)
        .then((parsedArticles) => {
            console.log(parsedArticles)
        })
    }