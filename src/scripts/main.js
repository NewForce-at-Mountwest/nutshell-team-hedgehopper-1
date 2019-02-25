import chatAPI from "./chatAPI"
import chatDom from "./chatDom"
import chatClickEvents from "./chatClickEvents";

chatAPI.getComment()
.then((word) => {
    console.log(word)
})

chatDom()
chatClickEvents.postNewComment()