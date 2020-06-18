document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);
  newTaskUl.addEventListener("click", deleteTask);
});

function createNewTask(event) {
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement('li');
  const button = document.createElement('button');

  newTask.innerText = newTaskDescription.value;
  newTask.appendChild(button).innerText = "X";
  appendNewTask(newTask);
  event.target.reset();
};

function appendNewTask(task) {
  document.getElementById("tasks").appendChild(task);
};

function deleteTask() {
  const li = document.getElementById('tasks').querySelector('li');
  li.remove();
};