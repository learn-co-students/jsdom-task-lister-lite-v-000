document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const taskList = document.getElementById('tasks')
  const taskName = document.getElementById('new-task-description')


  function buildListItem(){
    let task = document.createElement("li")
    task.textContent = taskName.value + ' '
    
    let button = document.createElement("button")
    button.textContent = 'x'
    task.appendChild(button)
    
    return task
  }

  // function removeToDo(this){
  //   if (this.target.nodeName === "BUTTON") {
  //     this.target.parentNode.remove()
  //   }
  // }
  
  function addToDo(){
    event.preventDefault()

    task = buildListItem() 
    list.appendChild(task)

    event.target.reset()
  }

  form.addEventListener("submit", addToDo)

  // taskList.addEventListener("click", removeToDo(this))

});








https://github.com/capricious-slingshot/jsdom-task-lister-lite-v-000/tree/solution