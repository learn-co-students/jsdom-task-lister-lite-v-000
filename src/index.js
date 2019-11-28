document.addEventListener("DOMContentLoaded", () => {
  LIST = document.querySelector("#tasks")

  const toDoLi = task => {
    return `<li>${task}</li>`
  }

  const addTask = task => {
    LIST.innerHTML += toDoLi(task)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let task = document.querySelector("#new-task-description")
    addTask(task.value)
  }

  const form = document.querySelector("form")

  form.addEventListener("submit", handleFormSubmit)

  
});

