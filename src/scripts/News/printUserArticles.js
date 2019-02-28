import newsAPImethods from "./newsAPImethods.js"

//takes user Id from session storage and runs fetch call to API to return user's articles
const printUserArticles = () => {
    let userId = sessionStorage.getItem("userId")
    newsAPImethods.printAllUserArticles(userId)
        // .then((parsedArticles) => {
            // console.log(parsedArticles)
        // })
    }