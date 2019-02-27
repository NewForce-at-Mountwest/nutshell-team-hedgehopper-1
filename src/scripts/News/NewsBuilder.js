const addNewsItem = () => {

    document.querySelector("#newsContainer").innerHTML =
    `<br>
    <legend>Enter a new news item</legend>
    <fieldset id="newsItemInputs">
    <label>Article Name</label>
      <input type="text" id="articleName" name="articleName" placeholder="Article Name"><br>
    <label>Article Synopsis</label>
      <input type="textarea" id="articleSynopsis" name="articleSynopsis" placeholder="Brief Description"><br>
    <lable>Article URL</label>
      <input type="url" id="articleURL" name="articleURL" placeholder="URL"><br>
      <br>
      <button id="saveNewsArticle">Save Article</button>
    </fieldset>
    <br>
    <div id="savedNewsArticles"></div>`
}

export default addNewsItem