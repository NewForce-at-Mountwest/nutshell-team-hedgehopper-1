const eventsAPI = {

    //post a new event
    POSTevent: (newEvent) => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        })
    },

    //get all events from db.json
    fetchAllEvents:(userId) =>{
        return fetch(`http://localhost:8088/events/?userId=${userId}`)
            .then(event => event.json())
    },

    deleteEvent: (deleteId) =>{
        return fetch(`http://localhost:8088/events/${deleteId}`,{
            method: "DELETE"
        }

        )
    },

    PUTevent: (editId, editedEvent) => {
        return fetch(`http://localhost:8088/events/${editId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEvent)
        })
    },

    fetchSingleEvent:(eventId) =>{
        return fetch(`http://localhost:8088/events/${eventId}`)
            .then(event => event.json())
    },








}

export default eventsAPI