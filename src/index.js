document.addEventListener("DOMContentLoaded", () => {
  
});

document.querySelector("#create-task-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let newTask = document.getElementById("new-task-description").value
  console.log(newTask)
  let list = document.getElementById("tasks")
  let li = document.createElement("li");
  li.innerHtml += newTask
  list.appendChild(li)
});