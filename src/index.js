document.addEventListener("DOMContentLoaded", () => {


  const form = document.getElementById('create-task-form')   //form
  const newTask = document.getElementById('new-task-description')   // new task
  const todoList = document.getElementById('tasks')  //list of todos
    
  //listen to `submit` event on the form, use preventDefault()
  form.addEventListener("submit", function(event) {
    const li = document.createElement('li')
    li.innerHTML = newTask.value
    todoList.appendChild(li);
    event.preventDefault();
  });
});

