// Component that stores all fetch information for Chat

const chatAPI = {
    getComment: () => {
        return fetch("http://localhost:8088/messages?_expand=user")
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
    editComment: (commentId) => {
        return fetch(`http://localhost:8088/messages/${commentId.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(commentId)
        });
      },
      getSingleComment: (commentId) => {
        return fetch(`http://localhost:8088/messages/${commentId}`)
        .then(response => response.json())
      }
    }






export default chatAPI