document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#create-task-form")
  const newTask = document.getElementById("new-task-description")

  const taskList = document.getElementById("tasks");
  const li = document.createElement('li');
  const del = document.createElement("BUTTON");

  form.addEventListener("submit", function(event) {
    li.innerHTML = `${newTask.value}`;
    taskList.appendChild(li);
    del.innerHTML = "X";
    li.appendChild(del);

    event.target.reset();
    //prevent default event
    event.preventDefault();
  })

  li.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
      if (confirm('Task Completed?')) {
        li.remove();
      }
    }
  })

});
