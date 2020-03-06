document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDescription = document.getElementById('new-task-description');
  const newTaskForm = document.getElementById("create-task-form");

  newTaskForm.addEventListener("submit", function(event){
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement('li');
    newTask.innerHTML = newTaskDescription.value;

    appendTask(newTask);

  });

  function appendTask(task) {
    document.getElementById('tasks').appendChild(task);
  }
  
});
