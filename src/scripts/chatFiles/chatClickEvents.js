// houses all chat functions associated with click events
import chatAPI from "./chatAPI";
import messageObjectBuilder from "./messageObjectBuilder";
import editCommentForm from "./editCommentForm";
import scrollToBottom from "./scrollToBottom";
import editObjectBuilder from "./editObjectBuilder";


const chatClickEvents = {
  postNewComment: () => {
    document.querySelector("#chatContainer").addEventListener("click", () => {
      if(event.target.classList.contains("chatSave"))
      chatAPI
        .postComment(messageObjectBuilder())
        .then(chatAPI.getComment)
        .then(comments => {
          document.querySelector("#chat-area").innerHTML = "";
          comments.forEach(comment => {
            document.querySelector("#chat-area").innerHTML += `<p id="edit-${
              comment.id
            }" class="edit ${comment.userId}">${comment.user.name}:  ${comment.message}</p>`;
            scrollToBottom();
          });
          document.querySelector("#type-here").value = "";
        });
    });
  },
        isOpen: false,

  editComment: function(){
    this.handleEdit();
    document.querySelector("#chatContainer").addEventListener("dblclick", () => {
      const editId = event.target.id.split("-")[1];

      if (event.target.classList.contains("edit") && this.isOpen === false && event.target.classList.contains(sessionStorage.getItem("userId"))) {
        console.log("you clicked me");
        this.isOpen = true
        chatAPI.getSingleComment(editId).then(singleCommentData => {
          document.querySelector(`#edit-${editId}`).innerHTML = editCommentForm(singleCommentData);
          console.log(singleCommentData);
        });
      }


    });
  },
  handleEdit: function() {

    document.querySelector("#chatContainer").addEventListener("click", () => {
        if(event.target.classList.contains("save-edit-btn")){
            const comment = event.target.id.split("-")[2]
            chatAPI.editComment(editObjectBuilder(comment))
            .then(chatAPI.getComment)
            .then((comments) => {
                document.querySelector("#chat-area").innerHTML = ""
                comments.forEach(comment => {




                    document.querySelector("#chat-area").innerHTML += `<p id="edit-${comment.id}" class="edit ${comment.userId}">${comment.user.name}:  ${comment.message}</p>`
                    scrollToBottom()
                    this.isOpen = false
                })


            })


        }
    })
}

};

export default chatClickEvents;
