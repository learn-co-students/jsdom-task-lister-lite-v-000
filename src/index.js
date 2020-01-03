document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit-form-btn").addEventListener("click", e => {
    e.preventDefault();
    createTodo();
  });
});

function createTodo() {
  let taskText = document.getElementById("new-task-description").value;
  let newTask = document.createElement("li");
  newTask.innerHTML =
    taskText +
    "&nbsp;" +
    "<button class='delete' onclick='deleteTask(this)'>x</button>";
  document.getElementById("tasks").appendChild(newTask);
}

function deleteTask(task) {
  task.parentNode.remove();
}
