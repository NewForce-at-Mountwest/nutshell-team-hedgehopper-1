import printToDom from "./taskPrintDom";
import addClick from "./taskClickEvents"

const afterLoad = (userId) => {
    printToDom.buildTaskList(userId);
    printToDom.button(userId);
    addClick.addNewTask(userId);
    addClick.deleteClick(taskId);

}

export default afterLoad