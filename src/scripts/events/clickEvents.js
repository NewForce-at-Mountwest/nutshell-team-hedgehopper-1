import buildEvents from "./buildEventsDOM"
import eventsAPI from "./eventsAPI"
import printEventDOM from "./printEventDOM";


const clickEvents = {



    newForm: () => {

        document.querySelector("#eventFormArea").addEventListener("click", () => {
            if(event.target.id ==="newEvent"){
                buildEvents.newEventForm()
            clickEvents.saveEvent();
            clickEvents.closeEventForm();

            }


        })
    },

    saveEvent: () => {
        document.querySelector("#eventFormArea").addEventListener("click", () => {
            if(event.target.id==="saveEvent"){
                console.log("you clicked save event")
            let name = document.querySelector("#eventName").value
            let date = document.querySelector("#eventDate").value
            let location = document.querySelector("#eventLocation").value
            let userId = sessionStorage.getItem("userId")

            const newEvent = {
                name: name,
                date: date,
                location: location,
                userId: userId
            }
            eventsAPI.POSTevent(newEvent).then(() => {
                printEventDOM()
            })

            }



        })
    },

    closeEventForm: () => {
        document.querySelector("#eventFormArea").addEventListener("click", () => {
            if(event.target.id ==="closeEventForm"){
                document.querySelector("#eventFormArea").innerHTML = ""
            buildEvents.newEventButton();
            clickEvents.newForm()
            }


        })
    },

    deleteEvent: () => {

        document.querySelector("#eventDOMarea").addEventListener("click", () => {

            if (event.target.classList.contains("deleteEvent")) {
                const deleteId = event.target.id.split("-")[1]

                console.log(deleteId)
                eventsAPI.deleteEvent(deleteId)
                    .then(() => {
                        printEventDOM()
                    })

            }

            if (event.target.classList.contains("editEvent")) {
                const editId = event.target.id.split("-")[1]

                eventsAPI.fetchSingleEvent(editId)
                    .then((x) => {
                        let name = x.name
                        let date = x.date
                        let location = x.location
                        document.querySelector(`#singleEvent-${editId}`).innerHTML =
                            `<fieldset id="editEventForm-${editId}">
                    <legend>Edit Event</legend>
                    <div>
                    <label>Name:</label> <input type="text" id="eventName-${editId}" value="${name}" >
                    </div>
                    <div>
                    <label>Date:</label> <input type="date" id="eventDate-${editId}" value="${date}">
                    </div>
                    <div>
                    <label>Location:</label> <input type="text" id="eventLocation-${editId}" value = "${location}">
                    </div>
                    <div class="event-button">
                    <button type="submit" id="saveEditedEvent-${editId}">Save Changes</button>
                    </div>

                    </fieldset>`






                        document.querySelector(`#saveEditedEvent-${editId}`).addEventListener("click", () => {
                            console.log("clicked save edit")

                            let name = document.querySelector(`#eventName-${editId}`).value
                            let date = document.querySelector(`#eventDate-${editId}`).value
                            let location = document.querySelector(`#eventLocation-${editId}`).value
                            let userId = sessionStorage.getItem("userId")

                            const editedEvent = {
                                name: name,
                                date: date,
                                location: location,
                                userId: userId
                            }
                            console.log(editedEvent)


                            eventsAPI.PUTevent(editId, editedEvent)
                                .then(() => {
                                    printEventDOM()
                                })
                        })





                    })
            }

        })

    }






}

export default clickEvents