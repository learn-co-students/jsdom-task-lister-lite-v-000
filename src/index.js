document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const newTask = document.getElementById('new-task-description')
  const todoList = document.getElementById('tasks')
   //listen to `submit` event on the form, use preventDefault()
  form.addEventListener("submit", function(event) {
    const li = document.createElement('li')
    li.innerHTML = newTask.value
    todoList.appendChild(li);
    event.preventDefault();
  });
});
