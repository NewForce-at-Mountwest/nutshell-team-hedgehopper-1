const taskFormBuilder = {
    buildTasks: () => {
        return `
        <div id = "taskForm-${buildTasks.id}">
        <h3>Add new task</h3>
        <input type="text" id="taskName" placeholder="task name">
        <input type="text" id="taskDescription" placeholder="description">
        <input type="date" id="taskDueDate">
        <label class="checkbox">
        <input class="checkbox" id="checkbox-${buildTasks.id}" type="checkbox" ${buildTasks.completed === "true"? "checked" : ""}/>
        <span>${buildTasks.name}</span>
        </label>
        <p>${buildTasks.description}</p>
        <p>${buildTasks.dueDate}</p>
        <button id="addTaskBtn">Add Task</button>
        </div>
        `
    },

}