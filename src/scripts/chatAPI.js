// Component that stores all fetch information for Chat

const chatAPI = {
    getComment: () => {
        return fetch("http://localhost:8088/messages")
        .then(r => r.json());
    },
    postComment: (newMessage) => {
        return fetch ("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)

        });
    },
    editComment: (commentId, editedComment) => {
        return fetch(`http://localhost:8088/messages/${commentId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedComment)
        });
      }
    }






export default chatAPI