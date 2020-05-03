document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const allTasks = document.getElementById('tasks')
  const taskName = document.getElementById('new-task-description')

  document.querySelector("#create-task-form").addEventListener("click", function(event) {
    
    let element = document.createElement('li')
    event.preventDefault();
    element.innerHTML = taskName.value
    allTasks.appendChild(element)
    document.querySelector("#create-task-form").reset()
    
  }, );



});
