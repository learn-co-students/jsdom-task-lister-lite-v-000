document.addEventListener("DOMContentLoaded", () => {

  //form
  const form = document.getElementById('create-task-form')

  // new task
  const newTask = document.getElementById('new-task-description')
  const li = document.createElement('li')

  //list of todos
  const todoList = document.getElementById('tasks')
    
  //listen to `submit` event on the form, use preventDefault()
  form.addEventListener("submit", function(event) {
    li.innerHTML = newTask.value
    todoList.appendChild(li);

    event.preventDefault();
  });
  

});

