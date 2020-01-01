let submitButton;


function addNewListNode(content) {
  let targetNode = document.getElementById('tasks');
  let newListElem = document.createElement('li');
  newListElem.textContent = content;
  targetNode.appendChild(newListElem);
}

function addTaskToList(event) {
  let content = document.getElementById('new-task-description').value;
  event.preventDefault();
  addNewListNode(content);
}


document.addEventListener("DOMContentLoaded", () => {
  submitButton = document.getElementById("create-task-form")
  submitButton.addEventListener("submit", addTaskToList);
});
