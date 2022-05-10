import createTask from "./components/taskComplete.js";
import createDeleteIcon from "./components/deleteTask.js";
const btn = document.querySelector("[data-btn]");
const crearTarea = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-from-input]");
  const tasks = document.querySelector("[data-tasks]");
  const valorInput = input.value;
  const tarea = document.createElement("li");
  const taskContent = document.createElement("div");
  const taskText = document.createElement("span");

  taskContent.classList.add("task__contenedor-izquierdar");
  tarea.classList.add("task");
  taskText.classList.add("task__texto");
  taskText.innerHTML = valorInput;
  input.value = "";

  taskContent.appendChild(createTask());
  taskContent.appendChild(taskText);
  tarea.appendChild(taskContent);
  tarea.appendChild(createDeleteIcon());
  tasks.appendChild(tarea);
  console.log(valorInput);
};
btn.addEventListener("click", crearTarea);
