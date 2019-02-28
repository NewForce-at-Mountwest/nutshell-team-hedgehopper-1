
const buildEditForm = (parsedArticle) => {
    // console.log(parsedArticle)
    document.querySelector(`#article-${parsedArticle.id}`).innerHTML =
        `<article id="article-${parsedArticle.id}" class="newsArticle">
                <label>Article Name</label>
                <input type="text" id="editedArtName" value="${parsedArticle.artName}"</input><br>
                <label>Article Synopsis</label>
                <input type="text" id="editedArtSynopsis" value="${parsedArticle.artSynopsis}"</input><br>
                <lable>Article URL</label>
                <input type="text" id="editedArtURL" value="${parsedArticle.artURL}"</input><br>
                <br>
                <button id="saveBtn-${parsedArticle.id}" class="saveBtn">Save Edited Article</button>
                </article>
                <br>`
}

export default buildEditForm