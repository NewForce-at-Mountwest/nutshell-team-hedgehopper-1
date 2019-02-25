// builds dom component and prints to dom.

const chatDom = () => {
    document.querySelector("#chatContainer").innerHTML = `<div id="chat">
        <div id="chat-header"></div>
          <section id="chat-area"></section>
        </div>
        <input type="text" id="type-here" placeholder="New Message">
        <button id="chat-save">Send</button>`


}


export default chatDom