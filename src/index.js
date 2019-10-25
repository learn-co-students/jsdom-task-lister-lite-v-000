document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form")

  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault()

  const newTask = document.createElement("li");

  newTask.innerText = document.getElementById("new-task-description").value;
  document.getElementById("tasks").appendChild(newTask);
  event.target.reset();
}
