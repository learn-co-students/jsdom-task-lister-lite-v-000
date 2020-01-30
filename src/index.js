document.addEventListener("DOMContentLoaded", function(){
  // your code here
  const taskForm = document.getElementById("create-task-form");
  // const newTaskDescription = document.getElementById("new-task-description");
  // const taskUl = document.getElementById("tasks");
  
  taskForm.addEventListener("submit", createNewTasks);
  

});

const createNewTasks = function(event){
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

function appendNewTask(task){
  document.getElementById("tasks").appendChild(task);
}