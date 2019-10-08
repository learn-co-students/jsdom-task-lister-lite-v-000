

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener("submit", function(e) {
    e.preventDefault();
    addTaskToList();
  })
});

function addTaskToList() {
  let task = document.getElementById('new-task-description').value;
  let taskList = document.getElementById('tasks');
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(task));

  taskList.appendChild(li);
}

function removeTaskFromList(li) {

}
