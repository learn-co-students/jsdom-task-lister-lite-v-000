document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')

  function createTask(evt) {
    evt.preventDefault();
    const task = form.querySelector('#new-task-description').value
    const newTask = document.createElement('li');
    newTask.innerHTML = task;
    document.getElementById('tasks').appendChild(newTask);
    form.reset()
  }

  form.addEventListener("submit", createTask)
});
