const buildArticleObject = () => {

    let artName = document.querySelector("#articleName").value
    let artSynopsis = document.querySelector("#articleSynopsis").value
    let artURL = document.querySelector("#articleURL").value

    const newArticleObject = {
        artName : artName,
        artSynopsis: artSynopsis,
        artURL: artURL,
        userId: sessionStorage.getItem("userId"),
        timestamp: Date.now() / 1000 | 0
    }
    return newArticleObject
}

export default buildArticleObject