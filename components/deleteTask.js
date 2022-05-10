const createDeleteIcon = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-trash-can");
  i.addEventListener("click", deleteParent);
  return i;
};
const deleteParent = (e) => {
  const elemento = e.target.parentElement;
  elemento.remove();
};
export default createDeleteIcon;
