document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskDescription = document.getElementById('new-task-description');
  
  function addTasks (event) {
    const task = document.createElement('li'); // Create a task.

    task.textContent = taskDescription.value + " ";

    // Create the delete button for the task.
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute("data-description", taskDescription.value);
    deleteButton.textContent = "Delete Task";
    
    // Add an event listener for deleting the task. THIS is where that functionality belongs!
    // For future reference, I think it's a good idea to add event listeners to tasks as they are being created.
    deleteButton.addEventListener('click', function () { task.remove(); });

    task.appendChild(deleteButton); // Add the delete button to the task. 
    tasks.appendChild(task); // Add the task to the TODO List.
    
    taskDescription.value = ""; // Reset the taskDescription input.
    event.preventDefault(); // Prevent the form from submitting to another page.
  } // End of updateTasks

  form.addEventListener("submit", addTasks, false);
});