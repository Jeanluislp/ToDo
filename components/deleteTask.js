import { displayTasks } from "./displayTask.js";
const createDeleteIcon = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-trash-can");
  i.addEventListener("click", () => deleteParent(id));
  return i;
};
const deleteParent = (id) => {
  const tasks = document.querySelector("[data-tasks]");
  //tasks.innerHTML = "";
  const taskList = JSON.parse(localStorage.getItem("ToDoTaks"));
  const index = taskList.findIndex((item) => item.id === id);
  console.log(index);
  taskList.splice(index, 1);
  localStorage.setItem("ToDoTaks", JSON.stringify(taskList));
  displayTasks();
};
export default createDeleteIcon;
