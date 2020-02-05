document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById("create-task-form")
  const taskDescription = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks")

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    taskList.innerHTML += `<div id="list-${taskDescription.value}"><li>${taskDescription.value}<button>X</button></div>`;
  });

});