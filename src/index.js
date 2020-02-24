document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const newTask = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  // const taskNode = document.createTextNode(taskList);
  
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // alert("button was clicked");
    
    function addTask(task) {
      // alert(task);
      // this.taskNode.appendChild(`<li>${task}</li>`);
      taskList.insertAdjacentHTML("afterend", `<li>${task}</li>`);
    }
    addTask(newTask.value);
  });
});