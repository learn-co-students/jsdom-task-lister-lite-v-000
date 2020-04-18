document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskDescription = document.getElementById('new-task-description');
  const tasks = document.getElementById('tasks');

  function updateTasks (event) {
    // Create the task.
    const task = document.createElement('li');
    task.textContent = taskDescription.value + " ";

    /* Create the and append the delete button.
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute("data-description", taskDescription.value);
    deleteButton.textContent = "Delete Task";
    
    task.appendChild(deleteButton); // Add the delete button to the task.
    */

    tasks.appendChild(task); // Add the task to the TODO List.
    
    taskDescription.value = ""; // Reset the taskDescription input.

    event.preventDefault(); // Prevent the form from submitting to another page.
  }

  // function deleteTask (event) { // Delete the entire list item/task.
  //   event.target.parentNode.remove();
  // } This doesn't work.

  form.addEventListener("submit", updateTasks, false);

  /* tasks.querySelectorAll('li button').forEach(
      deleteButton => deleteButton.AddEventListener('click', function(e) {
        e.target.parentElement.remove();
      })
    ); None of this works. 
  */
});

// When the user clicks "Delete Task", I want to delete that task.
// "Delete Task" is one of the <ul id="tasks"><li><button>Delete Task</button></li></ul> elements.
// I want to delete whichever <li> has the button that was clicked on.
// This is WAY harder to do than I thought.