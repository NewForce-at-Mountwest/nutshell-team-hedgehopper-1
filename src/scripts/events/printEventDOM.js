import eventsAPI from "./eventsAPI.js"




function printEventDOM(){
    let userId = sessionStorage.getItem("userId")
    eventsAPI.fetchAllEvents(userId)

.then(events => {console.log(events)
    let sortedEvents = events.sort(function(a,b){
        return new Date(a.date)-new Date(b.date);
    })
    console.log(sortedEvents)
    document.querySelector("#eventDOMarea").innerHTML = ""

    events.forEach(event => {



        document.querySelector("#eventDOMarea").innerHTML += `<fieldset id="singleEvent-${event.id}">
    <legend></legend>
        <div id="name-${event.id}">Name: ${event.name}</div>
        <div id="date-${event.id}">Date: ${event.date}</div>
        <div id="location-${event.id}">Location: ${event.location}</div>
        <div class="event-button">
            <button type="edit" class="editEvent"   id="editEvent-${event.id}">Edit Event</button>
            <button type="delete" class="deleteEvent" id="deleteEvent-${event.id}">Delete Event</button>
        </div>
    </fieldset>`



    })
})
}

export default printEventDOM

