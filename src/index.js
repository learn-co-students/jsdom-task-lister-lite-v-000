document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const task = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");
  document.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskLi = document.createElement("li");
    taskLi.innerText = task.value
    list.appendChild(taskLi);
  });
});

