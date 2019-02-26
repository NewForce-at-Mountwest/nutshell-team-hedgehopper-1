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


printForm: () => {
    document.getElementById("task-container").innerHTML = taskFormBuilder.buildTaskForm();

}
}

export default printToDom
