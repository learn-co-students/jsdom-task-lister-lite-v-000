document.addEventListener("DOMContentLoaded", () => {
    const task = document.getElementById("new-task-description")
    const list = document.getElementById("list");
  
    document.addEventListener("submit", function(event) {
      event.preventDefault();
      let todo = task.value;
      list.innerHTML += `<div id="list-${todo}"><li>${todo}`;
    });
  });
