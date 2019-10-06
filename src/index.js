// #1 Listen for Event "Submit"
document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", createNewTask)
  // Listens for submission, triggers createNewTask
});

// #2 Takes user input and adds a new li with the text
const createNewTask = event => {
  //prevent from loading a new page on submission
  event.preventDefault();

  const description = document.getElementById("new-task-description");
  const task = document.createElement("li");
  task.innerHTML = description.value;

  addNewTask(task);

  event.target.reset();
};

//Adds new task to the list
const addNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
