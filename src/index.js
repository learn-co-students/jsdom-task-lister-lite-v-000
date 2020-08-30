document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", createTask);
});

function createTask(event) {
  event.preventDefault();
  const ulItem = document.getElementById("tasks");
  const formInput = document.getElementById("new-task-description");
  let newTask = formInput.value;
  const insertElement = document.createElement('li');
  insertElement.innerText = newTask;
    
  ulItem.appendChild(insertElement);
    
  
};

