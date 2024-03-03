const toDoList = new Map();
let counter = 0;

const addToDo = document.getElementById("addToDo");
const toDoListContainer = document.getElementById("toDoListContainer");

addToDo.addEventListener("click", function () {
  const text = document.getElementById("newToDo").value;
  if (text === "") return;

  document.getElementById("newToDo").value = "";
  counter++;
  toDoList.set(counter, text);
  renderToDoList();
});

const renderToDoList = () => {
  toDoListContainer.innerHTML = "";
  toDoList.forEach((value, key) => {
    toDoListContainer.innerHTML += createToDoElement(key, value);
  });

  attachDeleteListeners();
};

const createToDoElement = (id, text) => {
  return `<div class="to-do">
    <p class="to-do-text">${text}</p>
    <div class="buttons-container">
      <div class="to-do-delete" id="deleteTodo${id}"><img src="trash-solid.svg" alt="" /></div>
      <div class="to-do-done"><img src="circle-check-regular.svg" alt="" /></div>
    </div>
  </div>`;
};

const attachDeleteListeners = () => {
  const deleteButtons = document.querySelectorAll(".to-do-delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      deleteToDo(button.id);
    });
  });
};

const deleteToDo = (id) => {
  let numberId = id.match(/\d+/)[0];
  toDoList.delete(+numberId);
  renderToDoList();
};

renderToDoList();
