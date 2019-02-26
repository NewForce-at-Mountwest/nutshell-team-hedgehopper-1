// function that build editMessage objects

const editObjectBuilder = (commentId) => {
    const chatMessage = document.querySelector(`#edited-${commentId}`).value
    const usersId = sessionStorage.getItem("userId")


    return {
        message: chatMessage,
        userId: usersId,
        id: commentId

    }
}

export default editObjectBuilder