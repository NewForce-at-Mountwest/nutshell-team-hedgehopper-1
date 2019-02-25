// houses all chat functions associated with click events
import chatAPI from "./chatAPI";
import messageObjectBuilder from "./messageObjectBuilder";

function scrollToBottom() {
    // Get a reference to the div you want to auto-scroll.
const someElement = document.querySelector("#chat-area");
// Create an observer and pass it a callback.
const observer = new MutationObserver(scrollToBottom);
// Tell it to look for new children that will change the height.
const config = {childList: true};
observer.observe(someElement, config);
    someElement.scrollTop = someElement.scrollHeight;
  }

  const chatClickEvents = {
    postNewComment: () => {
        document.querySelector("#chat-save").addEventListener("click", () => {
                chatAPI.postComment(messageObjectBuilder())
                .then(chatAPI.getComment)
                .then((comments) => {
                    document.querySelector("#chat-area").innerHTML = ""
                    comments.forEach(comment => {
                        document.querySelector("#chat-area").innerHTML += `<p>${comment.userId}:  ${comment.message}</p>`
                        scrollToBottom()
                    })
                    document.querySelector("#type-here").value = ""

                })
        })
    }
}


    export default chatClickEvents