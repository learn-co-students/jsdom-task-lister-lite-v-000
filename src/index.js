document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector("#create-task-form").addEventListener("submit", createTaskFromForm)

  function createTaskFromForm(event) {
    addTaskToNodeList(event.target)
    event.preventDefault()
  }

  function addTaskToNodeList(node) {
    const taskList = document.querySelector("#tasks")

    const newTask = document.createElement("li")
    const text = node[0].value, color = node[1].value
    newTask.innerText = text
    newTask.style.backgroundColor = color
    taskList.appendChild(newTask)
  }

});
