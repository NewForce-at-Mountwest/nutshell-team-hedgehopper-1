import chatAPI from "./chatFiles/chatAPI"
import chatDom from "./chatFiles/chatDom"
import chatClickEvents from "./chatFiles/chatClickEvents";

chatAPI.getComment()
.then((word) => {
    console.log(word)
})

chatDom()
chatClickEvents.postNewComment()
chatClickEvents.editComment()