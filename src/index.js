document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.getElementById("create-task-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();

      const taskName = document.getElementById("new-task-description").value;
      const taskId = `${taskName.toLowerCase().split(" ").join("-")}`;
      const priority = document.getElementById("priority").value;

      const ul = document.getElementById("tasks");
      const li = document.createElement("li");

      li.innerHTML = `${taskName}<button id="btn-${taskId}">X</button>`;
      li.id = taskId;

      li.style.padding = "1rem";

      if (priority == "high") {
        li.style.backgroundColor = "red";
      } else if (priority == "medium") {
        li.style.backgroundColor = "yellow";
      } else {
        li.style.backgroundColor = "green";
      }

      ul.appendChild(li);
    },
    false
  );

  document.getElementById('tasks').addEventListener("click", function(event) {
    const taskId = `${event.target.id.replace('btn-','')}`;
    const taskItem = document.getElementById(taskId);
    const taskList = taskItem.parentNode;

    taskList.removeChild(taskItem);
  })
});
