document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  const input = document.getElementById('new-task-description')
  const taskList = document.getElementById('tasks')


  function addTask(description) {
    let num = taskList.childElementCount + 1
    const newLi = document.createElement('li')
    newLi.id = `${num}`
    newLi.innerHTML = `${description}<button id='${num}' data-description='${description}'>X</button>`
    taskList.appendChild(newLi)
    num++
  }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    addTask(input.value)
  })

  taskList.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      const taskId = e.toElement.id
      document.getElementById(`${taskId}`).remove()
    }
  })
});
