document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", onSubmit);
});

let inc = 0

const onSubmit = function(event) {
    event.preventDefault();

    const list = document.getElementById("tasks");
    const task = document.getElementById("new-task-description");

    const newTaskLi = document.createElement("li");
    newTaskLi.id = "li"+inc
    newTaskLi.innerText = task.value;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete"
    deleteButton.id = "delete"+inc

    list.appendChild(newTaskLi);
    list.appendChild(deleteButton);
};

const onDelete = function(event) {
  event.preventDefault();

  const list = document.getElementById("tasks");
  const task = document.getElementById("new-task-description");

  const newTaskLi = document.createElement("li");
  newTaskLi.innerText = task.value;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete"
  deleteButton.id = "delete"

  list.appendChild(newTaskLi);
};


