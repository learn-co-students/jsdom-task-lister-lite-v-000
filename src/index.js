document.addEventListener("DOMContentLoaded", () => {
  // get necessary DOM elements

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById('new-task-description');
  
  //where new tasks will live in DOM
  const newTaskAppear = document.getElementById("tasks");  //ul
  
  // attach event Listeners
  newTaskForm.addEventListener("submit", createNewTask);
});


function createNewTask(event) {
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);
  event.preventDefault();  //stop form from trying to submit
};


function appendNewTask(task) {
  document.getElementById("tasks").appendChild(task);
};
  
  













