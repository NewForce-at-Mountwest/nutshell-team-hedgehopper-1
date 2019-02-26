// make stuff scroll

function scrollToBottom() {
    // Get a reference to the div you want to auto-scroll.
const someElement = document.querySelector("#chat-area");
// Create an observer and pass it a callback.
const observer = new MutationObserver(scrollToBottom);
// Tell it to look for new children that will change the height.
const config = {childList: true};
observer.observe(someElement, config);
    someElement.scrollTop = someElement.scrollHeight;
  }

  export default scrollToBottom