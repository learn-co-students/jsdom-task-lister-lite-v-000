document.addEventListener("submit", (e) => {
  e.preventDefault()
  let newT = document.getElementById('new-task-description')
  let li = document.createElement('li')

  let tasks = document.getElementById('tasks')

  li.appendChild(document.createTextNode(newT.value))
  tasks.appendChild(li)
  e.target.reset()
});
