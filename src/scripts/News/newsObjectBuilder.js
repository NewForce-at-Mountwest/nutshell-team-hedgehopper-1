import newsAPIMethods from "./newsAPImethods";

const buildArticleObject = {

    buildNewArticleObject: () => {
        let artName = document.querySelector("#articleName").value
        let artSynopsis = document.querySelector("#articleSynopsis").value
        let artURL = document.querySelector("#articleURL").value

        const newArticleObject = {
            artName: artName,
            artSynopsis: artSynopsis,
            artURL: artURL,
            userId: sessionStorage.getItem("userId"),
            timestamp: Date.now() / 1000 | 0
        }
        // console.log(newArticleObject)
        return newArticleObject
    },
    buildEditedArticleObject: () => {
        let artName = document.querySelector("#editedArtName").value
        let artSynopsis = document.querySelector("#editedArtSynopsis").value
        let artURL = document.querySelector("#editedArtURL").value

        const editedArticleObject = {
            artName: artName,
            artSynopsis: artSynopsis,
            artURL: artURL,
            userId: sessionStorage.getItem("userId"),
            timestamp: Date.now() / 1000 | 0

        }

        return editedArticleObject
    }
}

export default buildArticleObject