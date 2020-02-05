document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDes = document.getElementById("new-task-description");

  const newTaskList = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();

  const newTaskDes = document.getElementById("new-task-description");
  const newTaskItem = document.createElement("li");
  newTaskItem.innerText = newTaskDes.value;

  appendNewTaskItem(newTaskItem);
  event.target.reset();
};

const appendNewTaskItem = task => {
  document.getElementById("tasks").appendChild(task);
}

