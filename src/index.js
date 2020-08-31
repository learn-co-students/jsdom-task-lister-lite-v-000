document.addEventListener("DOMContentLoaded", () => {
  let taskList = document.getElementById('tasks');

  document.addEventListener('submit', function(e) {
    e.preventDefault()
    let newTask = document.getElementById('new-task-description');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newTask.value));
    taskList.appendChild(li);
    e.target.reset();
  })
});