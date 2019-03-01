// function that build editMessage objects

const editObjectBuilder = (commentId) => {
    const chatMessage = document.querySelector(`#edited-${commentId}`).value
    const usersId = commentId.userId


    return {
        message: chatMessage,
        userId: usersId,
        id: commentId

    }
}

export default editObjectBuilder