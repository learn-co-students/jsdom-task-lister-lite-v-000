document.addEventListener("DOMContentLoaded", () => {
  // your code here
// let userInputField = document.getElementById("new-task-description");
const form =  document.getElementById('create-task-form');

function createTask(event){
    const createNewLi = document.createElement('li');
    createNewLi.textContent = form.querySelector('#new-task-description').value;

    document.getElementById('tasks').appendChild(createNewLi);
    event.preventDefault();
    event.target.reset();
  }

  form.addEventListener('submit',createTask);

});
