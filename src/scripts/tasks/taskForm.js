//builds the task form

const taskFormBuilder = {
    buildTaskForm: () => {
        return `
        <div id = "taskForm-${buildTaskForm.id}">
        <h3>Add new task</h3>
        <input type="text" id="taskName" placeholder="task name">
        <input type="text" id="taskDescription" placeholder="description">
        <input type="date" id="taskDueDate">
        <label class="checkbox">
        <input class="checkbox" id="checkbox-${buildTaskForm.id}" type="checkbox" ${buildTaskForm.completed === "true"? "checked" : ""}/>
        <span>${buildTaskForm.name}</span>
        </label>
        <p>${buildTaskForm.description}</p>
        <p>${buildTaskForm.dueDate}</p>
        <button id="addTaskBtn">Add Task</button>
        </div>
        `
    },


}