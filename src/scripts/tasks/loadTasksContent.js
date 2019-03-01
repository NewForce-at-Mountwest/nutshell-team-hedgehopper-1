import printToDom from "./taskPrintDom";
import addClick from "./taskClickEvents"
import taskFormBuilder from "./taskForm";

const afterLoad=() => {
    const userLogin=sessionStorage.getItem("userId")
    printToDom.buildTaskList(userLogin)
    document.querySelector("#taskFormContainer").innerHTML = taskFormBuilder.buildTaskForm()

    // printToDom.button(userId);
    // addClick.addNewTask();
    // addClick.deleteClick();


}
export default afterLoad