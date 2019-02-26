// houses all chat functions associated with click events
import chatAPI from "./chatAPI";
import messageObjectBuilder from "./messageObjectBuilder";
import editCommentForm from "./editCommentForm";
import handleEdit from "./handleEdit";
import scrollToBottom from "./scrollToBottom"



  const chatClickEvents = {
    postNewComment: () => {
        document.querySelector("#chat-save").addEventListener("click", () => {
                chatAPI.postComment(messageObjectBuilder())
                .then(chatAPI.getComment)
                .then((comments) => {
                    document.querySelector("#chat-area").innerHTML = ""
                    comments.forEach(comment => {
                        document.querySelector("#chat-area").innerHTML += `<p id="edit-${comment.id}" class="edit">${comment.user.name}:  ${comment.message}</p>`
                        scrollToBottom()
                    })
                    document.querySelector("#type-here").value = ""

                })
        })
    },
    editComment: () => {
        document.querySelector("#chat-area").addEventListener("dblclick", () => {
            const editId = event.target.id.split("-")[1]

            if(event.target.classList.contains("edit")) {
                 console.log("you clicked me")
                 chatAPI.getSingleComment(editId)
                 .then(singleCommentData => {
                    document.querySelector(`#edit-${editId}`).innerHTML = editCommentForm(singleCommentData)
                    console.log(singleCommentData)

                 })

           }


           handleEdit(editId)


        })
    }
}


    export default chatClickEvents