let taskForm = document.getElementById("create-task-form");
taskForm.addEventListener("submit", listToDo);

function listToDo(item) {
  item.preventDefault();
  let task = document.getElementById("new-task-description");

  let listItemText = document.createElement("p");
  let listItem = document.createElement("li");
  let taskList = document.getElementById("tasks");

  listItemText.innerText = task.value;
  listItem.appendChild(listItemText);
  taskList.appendChild(listItem);

  task.value = "";
};
