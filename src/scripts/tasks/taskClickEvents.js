import printToDom from "./taskPrintDom"
// import taskFormBuilder from "./taskForm"
// import apiManager from "./taskApiManger"
import buildTaskObject from "./taskObjectBuilder"
//adds click event to add new task button
const addClick = {

// Event listener for adding a new task
addNewTask: (userId) =>{ document.querySelector("#addTaskBtn").addEventListener("click", () => {
    console.log("click!")
    if (event.target.id === "addTaskBtn") {
        print.newTaskForm(); //print the new task form
        print.saveButton(userId); //print the save Button
       SaveButton(userId); //activate the listeners on the save button

  buildTaskObject(userId)

}})},



// Event listener for entire task container element

deleteClick: () => {
    document.querySelector("#task-container").addEventListener("click", () => {
  if (event.target.classList.contains("deleteTaskBtn")) {
    const taskId = event.target.id.split("-")[1];
    deleteTask(taskId)
    .then(() => {
        printToDom.buildTaskList();
    })

  // --- CHECKBOX EVENT LISTENER ---//
  } else if(event.target.classList.contains("checkbox")){
    const taskId = event.target.id.split("-")[1]; // 14
    if(document.querySelector(`#checkbox-${taskId}`).checked){
      markAsComplete(taskId)
    } else {
      markAsIncomplete(taskId)
    }
    // ---- EVENT LISTENER FOR EDIT BUTTON --//
  } else if(event.target.classList.contains("edit-btn")){
    const taskId = event.target.id.split("-")[1];
    getOneTask(taskId)
    .then((singleTaskInfo) => {
      console.log(singleTaskInfo);
      document.querySelector(`#task-${taskId}`).innerHTML = buildEditForm(singleTask);
    })
  // --- EVENT LISTENER FOR EDIT SAVE BUTTON --//
  } else if(event.target.classList.contains("saveTaskBtn")){
    const itemId = event.target.id.split("-")[2];
    console.log(itemId)
    taskFormBuilder.buildEditForm()
  }})}}
export default addClick;

    // const editedName = document.querySelector(`#taskNameEdit-${itemId}`).value;
    // const editedDate = document.querySelector(`#dueDateEdit-${itemId}`).value;
    // const editedDescription = document.querySelector(`#taskDescriptionEdit-${itemId}`).value;
    // const editedCompleted = document.querySelector(`#completedEditInput-${itemId}`).value;

    // const editedTaskObject = buildTaskObject(editedName, editedDate, editedDescription, editedCompleted)

    // console.log(editedTaskObject);

    // editTask(itemId, editedTaskObject)
    // .then(printAllTasks)


// addTaskButton = () => {
//     document.querySelector("#taskContainer").addEventListener("click", () => {
//         if(event.target.id === "addTaskBtn"){
//             console.log("saved!")
//             printToDom.buildTaskList();
// //get user input
//         }
//     })
// }
// }

// export default addClick