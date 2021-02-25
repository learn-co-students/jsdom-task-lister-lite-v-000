document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')

  function createTask(e) {
    let newItem = document.createElement('li')
    newItem.textContent = form.querySelector('#new-task-description').value

    document.getElementById('tasks').appendChild(newItem)
    e.preventDefault()
    e.target.reset()
  }

  form.addEventListener('submit',createTask)
});
