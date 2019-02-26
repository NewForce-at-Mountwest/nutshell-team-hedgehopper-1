const addNewsItem = () => {

    document.querySelector("#newsContainer").innerHTML =
    `<legend>Enter a new news item</legend>
    <fieldset id="newsItemInputs">
      <input type="text" id="articleName" name="articleName" placeholder="Article Name"><br>
      <input type="textarea" id="articleSynopsis" name="articleSynopsis" placeholder="Brief Description"><br>
      <input type="url" id="articleURL" name="articleURL" placeholder="URL"><br>
      <br>
      <button id="saveNewsArticle">Save Article</button>
    </fieldset>
    <br>
    <div id="savedNewsArticles"></div>`
}

export default addNewsItem