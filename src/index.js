
document.addEventListener("DOMContentLoaded", () => {
  
  const task = document.getElementById("new-task-description");
  const submit = document.getElementById("submit");
  const taskList = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let listElement = document.createElement("li");
    listElement.innerHTML = task.value;
    taskList.appendChild(listElement);
  });
});
