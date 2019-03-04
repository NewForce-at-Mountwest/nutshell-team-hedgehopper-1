const eventForm =

`<fieldset id="eventform">
<legend>Save New Event</legend>
<div>
  <label>Name:</label> <input type="text" id="eventName" >
</div>
<div>
  <label>Date:</label> <input type="date" id="eventDate">
</div>
<div>
  <label>Location:</label> <input type="text" id="eventLocation">
</div>
<div class="event-button">
<button type="submit" id="saveEvent">Save Event</button>
</div>
<div class="event-button">
<button type="submit" id="closeEventForm">Close Form</button>
</div>
</fieldset>`

const eventButton =

`<div class="event-button">
<button type="submit" id="newEvent">+ New Event</button>
</div>`

const editEventForm =
`<fieldset id="editEventForm">
<legend>Edi Event</legend>
<div>
  <label>Name:</label> <input type="text" id="eventName" >
</div>
<div>
  <label>Date:</label> <input type="date" id="eventDate">
</div>
<div>
  <label>Location:</label> <input type="text" id="eventLocation">
</div>
<div class="event-button">
<button type="submit" id="saveEditedEvent">Save Changes</button>
</div>

</fieldset>`











const buildEvents = {
    newEventForm: () =>{document.querySelector("#eventFormArea").innerHTML += eventForm},

    newEventButton: () =>{document.querySelector("#eventFormArea").innerHTML += eventButton},

    editEventForm: (editId)=>{document.querySelector(`#singleEvent-${editId}`).innerHTML = editEventForm}











}

export default buildEvents