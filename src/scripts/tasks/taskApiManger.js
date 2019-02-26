//module fetches from API and handles all API requests

const apiManager = {
    //fetches users tasks
    getTasks: (userId) => {
        return fetch(`http://localhost:8088/tasks?userId=${userId}`)
        .then(r => r.json())
    },
    //posts new tasks
postTask: (taskObject) => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskObject)
    })
},
//edit tasks

//delete tasks
}

export default apiManager