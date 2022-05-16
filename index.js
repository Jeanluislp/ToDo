import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/displayTask.js";
const btn = document.querySelector("[data-btn]");

btn.addEventListener("click", addTask);
displayTasks();
