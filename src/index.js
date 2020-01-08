document.addEventListener("DOMContentLoaded", () => {
  // your code here
  initialize();
});

function initialize() {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addToDo);
}

function addToDo(e) {
  e.preventDefault();
  const task = document.getElementById('new-task-description');
  addToList(task.value);
  text.value = "";
}

function addToList(task){
  const list = document.getElementById('tasks');
  const item = document.createElement('li');
  item.innerHTML = task;
  list.appendChild(item);
}
