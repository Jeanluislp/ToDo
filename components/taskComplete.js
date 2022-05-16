const addCheck = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-square-check");
  i.addEventListener("click", taskComplete);
  return i;
};
const taskComplete = (e) => {
  const element = e.target;
  element.classList.toggle("fas");
  element.classList.toggle("far");
  element.classList.toggle("icono-completo");
};

export default addCheck;
