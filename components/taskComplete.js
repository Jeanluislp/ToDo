const createTask = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-square-check", "icono-completo");
  i.addEventListener("click", taskComplete);
  return i;
};
const taskComplete = (e) => {
  const element = e.target;
  element.classList.toggle("fas");
  element.classList.toggle("far");
  element.classList.toggle("icono-completo");
};
console.log(createTask);
export default createTask;
