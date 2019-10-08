document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  let taskList = document.getElementById('tasks');

  // Form submit event
  form.addEventListener('submit', addTask);

  // Add task
  function addTask(e){
    e.preventDefault();
    
    // Get input value
    let newTask = document.getElementById("new-task-description");

    // Create new li element
    let li = document.createElement('li');

    // Add text node with input value
    li.appendChild(document.createTextNode(newTask));

    // Append lid to list
    taskList.appendChild(li);
    
  }

});

// can add text in input field
// click the submit button 
// add the text to the DOM in the Tasks box

// var my_func = function (event) {
//   alert("you clicked the button");
//   event.preventDefault();
// };

// // your form
// let form = document.getElementById("create-task-form");

// // attach event listener
// form.addEventListener("submit", my_func, true);
