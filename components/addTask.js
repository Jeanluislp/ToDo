import addCheck from "./taskComplete.js";
import createDeleteIcon from "./deleteTask.js";
import { displayTasks } from "./displayTask.js";

export const addTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-from-input]");
  const tasks = document.querySelector("[data-tasks]");
  const calendar = document.querySelector("[data-form-date]");

  const valorInput = input.value;
  const calendarValue = calendar.value;
  const calendarFormat = moment(calendarValue).format("DD/MM/YYYY");

  if (valorInput === "" || calendarValue === "") {
    return;
  }
  input.value = "";
  calendar.value = "";

  const complete = false;

  const taskObj = {
    valorInput,
    calendarFormat,
    complete,
    id: uuid.v4(),
  };
  tasks.innerHTML = "";

  const taskList = JSON.parse(localStorage.getItem("ToDoTaks")) || [];
  taskList.push(taskObj);
  localStorage.setItem("ToDoTaks", JSON.stringify(taskList));

  displayTasks();
};

export const crearTarea = ({ valorInput, calendarFormat, complete, id }) => {
  const tarea = document.createElement("li");
  tarea.classList.add("task");

  const taskContent = document.createElement("div");

  const check = addCheck(id);
  if (complete) {
    check.classList.toggle("fas");
    check.classList.toggle("far");
    check.classList.toggle("icono-completo");
  }

  const taskText = document.createElement("span");
  taskContent.classList.add("task__contenedor-izquierdar");
  taskText.classList.add("task__texto");
  taskText.innerHTML = valorInput;
  taskContent.appendChild(check);
  taskContent.appendChild(taskText);

  const dateElement = document.createElement("span");
  dateElement.classList.add("task__date");
  dateElement.innerHTML = calendarFormat;

  tarea.appendChild(taskContent);
  tarea.appendChild(dateElement);
  tarea.appendChild(createDeleteIcon());

  return tarea;
};
