document.addEventListener("DOMContentLoaded", function()  {
  // your code here
  addTask();
})

function addTask() {
  const form  = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const task = document.getElementById("new-task-description").value;
    const elList = document.getElementById("tasks");
    const elItem = document.createElement("li");
    elItem.innerText = task;
    elList.appendChild(elItem);
  })  
}

