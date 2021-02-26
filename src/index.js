document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector("#create-task-form").addEventListener("submit", createTaskFromForm)

  function createTaskFromForm(event) {
    addTaskToNodeList(event.target[0].value)
    event.preventDefault()
  }

  function addTaskToNodeList(task) {
    const taskList = document.querySelector("#tasks")

    const newTask = document.createElement("li")
    newTask.innerText = task
    taskList.appendChild(newTask)
  }

});
