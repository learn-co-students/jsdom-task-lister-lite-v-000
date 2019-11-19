document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", function (event) {
    value = document.getElementById('new-task-description').value
    newTask = document.createElement('li');
    newTask.innerText = `${value}`;
    document.getElementById("tasks").appendChild(newTask);
    event.preventDefault();
    document.getElementById('new-task-description').value = ``;
  })
});
