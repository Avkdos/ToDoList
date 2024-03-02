const toDoList = new Map();
let counter = 0;

const addToDo = document.getElementById("addToDo");
const toDoListContainer = document.getElementById("toDoListContainer");
let deleteButtons = document.getElementsByClassName("to-do-delete");
deleteButtons = Array.from(deleteButtons);
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    deleteToDo(button.id);
  });
});

addToDo.addEventListener("click", function () {
  const text = document.getElementById("newToDo").value;
  if (text === "") return;
  counter++;
  toDoList.set(counter, text);
  toDoListContainer.innerHTML += `<div class="to-do">
  <p class="to-do-text">
    ${text}
  </p>
  <div class="buttons-container">
    <div class="to-do-delete" id=deleteTodo${counter}><img src="trash-solid.svg" alt="" /></div>
    <div class="to-do-delete">
      <img src="circle-check-regular.svg" alt="" />
    </div>
  </div>
</div>`;
  console.log(deleteButtons);
  const newButton = document.getElementById(`deleteTodo${counter}`);
  newButton.addEventListener("click", function () {
    deleteToDo(newButton.id);
  });
  deleteButtons.push(document.getElementById(`deleteTodo${counter}`));
});

const deleteToDo = (id) => {
  let numberId = id.match(/\d+/)[0];
  toDoList.delete(+numberId);
  toDoListContainer.innerHTML = "";
  toDoList.forEach((value, key) => {
    toDoListContainer.innerHTML += `<div class="to-do">
  <p class="to-do-text">
    ${value}
  </p>
  <div class="buttons-container">
    <div class="to-do-delete" id=deleteTodo${key}><img src="trash-solid.svg" alt="" /></div>
    <div class="to-do-delete">
      <img src="circle-check-regular.svg" alt="" />
    </div>
  </div>
</div>`;
  });
};
