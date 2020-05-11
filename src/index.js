document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", addTask);

});

const addTask = event => {
  event.preventDefault();
  const newTaskList = document.getElementById("tasks");
  const desc = document.getElementById("new-task-description");
  const task = document.createElement("li");
  task.innerText = desc.value;
  newTaskList.appendChild(task);
}
