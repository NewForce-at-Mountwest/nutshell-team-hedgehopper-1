// import apiManager from "./taskApiManger"

//builds task object for logged in user

const buildTaskObject = () => {
   const taskName = document.querySelector("#taskName").value
   const taskDescription = document.querySelector("#taskDescription").value
    const taskDueDate = document.querySelector("#taskDueDate").value
    const isItComplete = false


    return {
        userId: sessionStorage.getItem("userId"),
        task: taskName,
        description: taskDescription,
        dueDate: taskDueDate,
        complete: isItComplete
    }
}


export default buildTaskObject