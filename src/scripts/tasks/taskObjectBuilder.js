//builds task object for logged in user

const buildTaskObject = (taskName, taskDescription, taskDueDate) => {
    return `{
        userId: ${sessionStorage.getItem("currentUser")},
        task: ${taskName},
        description: ${taskDescription},
        dueDate: ${taskDueDate},
        complete: false
    }`
}


export default buildTaskObject