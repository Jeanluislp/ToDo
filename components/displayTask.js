import { crearTarea } from "./addTask.js";
import dateElemnt from "./dateElemnt.js";
import { unique, dateOrder } from "../services/date.js";

export const displayTasks = () => {
  const tasks = document.querySelector("[data-tasks]");
  const taskList = JSON.parse(localStorage.getItem("ToDoTaks"));
  const dates = unique(taskList);

  dateOrder(dates);

  dates.forEach((date) => {
    const dateMoment = moment(date, "DD/MM/YYYY");
    tasks.appendChild(dateElemnt(date));

    taskList.forEach((task) => {
      const taskDate = moment(task.calendarFormat, "DD/MM/YYYY");
      const diff = dateMoment.diff(taskDate);

      if (diff === 0) tasks.appendChild(crearTarea(task));
    });
  });
};
