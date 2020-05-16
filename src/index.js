
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", createNewTask);
});

function createNewTask(event) {
  event.preventDefault();
  const ulItem = document.getElementById("tasks");
  const formInput = document.getElementById("new-task-description");
  let newTask = formInput.value;
  const insertElement = document.createElement('li'); 
  insertElement.innerText = newTask;
  ulItem.appendChild(insertElement);
};