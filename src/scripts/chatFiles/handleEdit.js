// import chatAPI from "./chatAPI";
// import editObjectBuilder from "./editObjectBuilder";
// import scrollToBottom from "./scrollToBottom"

// //handles edit click event.

// const handleEdit = () => {

//     document.querySelector("#chatContainer").addEventListener("click", () => {
//         if(event.target.classList.contains("save-edit-btn")){
//             const comment = event.target.id.split("-")[2]
//             chatAPI.editComment(editObjectBuilder(comment))
//             .then(chatAPI.getComment)
//             .then((comments) => {
//                 document.querySelector("#chat-area").innerHTML = ""
//                 comments.forEach(comment => {




//                     document.querySelector("#chat-area").innerHTML += `<p id="edit-${comment.id}" class="edit">${comment.user.name}:  ${comment.message}</p>`
//                     scrollToBottom()
//                 })


//             })


//         }
//     })
// }





