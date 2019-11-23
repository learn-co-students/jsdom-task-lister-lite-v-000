document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById("create-task-form");

  taskForm.addEventListener("submit", addTaskToList);

  });


  const addTaskToList = event => {
    event.preventDefault();

    const listItem = document.createElement("li");
    const taskInput = document.getElementById("new-task-description");

    listItem.innerText = taskInput.value;

    appendNewTask(listItem);
    event.target.reset();
  };

  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
  };
