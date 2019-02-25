const buildTaskObject = (taskName, taskDescription, taskDueDate) => {
    return {
        task: taskName, description: taskDescription, dueDate: taskDueDate
    }
}

export default buildTaskObject