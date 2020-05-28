document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    const tasks = document.getElementById("tasks");
    let newTask = document.createElement('li');
    let taskName = document.getElementById('new-task-description').value;
    let taskDueDate = document.getElementById('new-task-due-date').value;

    newTask.textContent = taskName + ' - due: ' + taskDueDate;

    tasks.appendChild(newTask);
    event.preventDefault();
  }, false);
});
