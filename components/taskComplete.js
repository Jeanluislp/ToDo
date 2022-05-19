const addCheck = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-square-check");
  i.addEventListener("click", (e) => taskComplete(e, id));
  return i;
};
const taskComplete = (e, id) => {
  const element = e.target;
  element.classList.toggle("fas");
  element.classList.toggle("far");
  element.classList.toggle("icono-completo");
  const taskList = JSON.parse(localStorage.getItem("ToDoTaks"));
  const index = taskList.findIndex((item) => item.id === id);
  taskList[index]["complete"] = !taskList[index]["complete"];
  localStorage.setItem("ToDoTaks", JSON.stringify(taskList));
};

export default addCheck;
