document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  let submit = document.querySelector("input[type=submit]")

  form.addEventListener('submit', function(event) {
    addNewTaskToList();
    event.preventDefault();
    clearTaskInput();
  });
});

function addNewTaskToList() {
  let task = document.getElementById('new-task-description').value
  let taskList = document.getElementById('tasks')
  let newLi = document.createElement('li')

  let newTask = taskList.appendChild(newLi)
  newTask.innerHTML = task;
}

function clearTaskInput() {
  document.getElementById('new-task-description').value = ""
}
