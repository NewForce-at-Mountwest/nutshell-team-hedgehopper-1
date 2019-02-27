import taskFormBuilder from "./taskForm"
import apiManager from "./taskApiManger"

const printToDom = {

    //builds users task list and prints to dom

    buildTaskList: userId => {
        document.getElementById("taskContainer").innerHTML = "";
        apiManager.getTasks(userId).then(tasks => {
            tasks.forEach(singleTask => {
                if(tasks.completed === false){
                    document.getElementById("taskContainer").innerHTML += buildTaskForm(singleTask)
                }else{
                    document.getElementById("taskContainer").innerHTML = "<h4>All tasks completed</h4>"
                }
                })
            })
        },
        button: userId => {
            document.querySelector("#taskContainer").innerHTML = `<button type="button" id="addTaskBtn-${userId}">New Task</button>`
          },    //print form
          newTaskForm: () => {
            document.querySelector("#taskContainer").innerHTML = taskFormBuilder.buildTaskForm();
          },  //print edit form
          editForm: (taskObject) => {
            document.querySelector("#taskContainer").innerHTML = taskFormBuilder.buildEditForm(taskObject);
          },  saveButton: (userId) => {
            document.querySelector("#taskContainer").innerHTML = taskFormBuilder.saveButton(userId)
          },  taskbox: () => {
            document.querySelector("#taskContainer").innerHTML = `<div id="taskHeader">TASKS</div>
              <div id="taskContainer"></div><`
          },


printForm: () => {
    document.getElementById("taskContainer").innerHTML = taskFormBuilder.buildTaskForm();

}
}

export default printToDom
