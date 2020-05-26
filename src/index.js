document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", createTask);
  
});

function createTask(event) {
  event.preventDefault();
  const ul = document.getElementById("tasks");
  const input = document.getElementById("new-task-description");
  let task = input.value;
  const insertLi = document.createElement('li');
  insertLi.innerText = task;
  ul.appendChild(insertLi);
};
