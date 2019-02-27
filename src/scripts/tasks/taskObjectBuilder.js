import apiManager from "./taskApiManger"

//builds task object for logged in user

const buildTaskObject = (taskName, taskDescription, taskDueDate, isItComplete) => {
    return `{
        userId: ${sessionStorage.getItem("userId")},
        task: ${taskName},
        description: ${taskDescription},
        dueDate: ${taskDueDate},
        complete: ${isItComplete}
    }`
}


export default buildTaskObject