document.addEventListener("DOMContentLoaded", () => {
  

  let createTaskForm = document.getElementById("create-task-form");
  let newTaskPriority = document.getElementById("new-task-priority");
  let tasks = document.getElementById("tasks");

    createTaskForm.addEventListener("submit", function(event){
      event.preventDefault();

      let newTaskDescription = document.getElementById("new-task-description");
      const newTask = document.createElement("li");

      newTask.innerHTML = newTaskDescription.value;
      document.getElementById("tasks").appendChild(newTask);
    });

    tasks.addEventListener("click",function(e) {
      const tgt = e.target;
      if (tgt.tagName.toUpperCase() == "LI") {
        tgt.parentNode.removeChild(tgt); 
      }
    });
});




  

