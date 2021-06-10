document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //document.querySelector('input[type="submit"]').addEventListener("submit", function(event) {
  //  event.preventDefault();
  //});

  document.getElementById('create-task-form').addEventListener("submit", addToDo);

});

// when you click create new task, adds a new li element to ul where id = tasks with the content == whatever's in the field

function addToDo(e) {
  e.preventDefault()
  let task = document.getElementById('new-task-description')
  let formatted = document.createElement('li')
  formatted.innerText = task.value
  document.getElementById('tasks').appendChild(formatted)
};