document.addEventListener("DOMContentLoaded", () => {

  //form and relevant input fields
  const newTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');

  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById('tasks');

  //attach event listeners
  newTaskForm.addEventListener('submit', createNewTask);
});

const createNewTask = event => {

  //prevent from submitting form
  event.preventDefault();

  const newTaskDescription = document.getElementById('new-task-description');
  const newTask = document.createElement('li');
  newTask.innerHTML = newTaskDescription.value;

  appendNewTask(newTask);

  //reset input field
  event.target.reset();
}

const appendNewTask = task => {
  document.getElementById('tasks').appendChild(task);
};
