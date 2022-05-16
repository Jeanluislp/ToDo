import addCheck from "./taskComplete.js";
import createDeleteIcon from "./deleteTask.js";

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

  const taskObj = {
    valorInput,
    calendarFormat,
  };
  tasks.appendChild(crearTarea(taskObj));
};

const crearTarea = ({ valorInput, calendarFormat }) => {
  const tarea = document.createElement("li");
  tarea.classList.add("task");

  const taskContent = document.createElement("div");

  const taskText = document.createElement("span");
  taskContent.classList.add("task__contenedor-izquierdar");
  taskText.classList.add("task__texto");
  taskText.innerHTML = valorInput;
  taskContent.appendChild(addCheck());
  taskContent.appendChild(taskText);

  const dateElement = document.createElement("span");
  dateElement.classList.add("task__date");
  dateElement.innerHTML = calendarFormat;

  tarea.appendChild(taskContent);
  tarea.appendChild(dateElement);
  tarea.appendChild(createDeleteIcon());

  return tarea;
};
