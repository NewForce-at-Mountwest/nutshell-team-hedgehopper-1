// function that build message objects

const messageObjectBuilder = () => {
    const chatMessage = document.querySelector("#type-here").value
    const usersId = sessionStorage.getItem("userId")


    return {
        message: chatMessage,
        userId: usersId
    }
}

export default messageObjectBuilder