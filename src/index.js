document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

  // As a user, I should be able to click some form of a submit button.
  form.addEventListener("submit", processMyRequest);

  function processMyRequest(event) {
    // Squelch a default action with Event.preventDefault
    event.preventDefault();
    // As a user, I should be able to type a task into the input field.
    // As a user, the task string that I provided should appear on the DOM
    // after the submit button has been activated.
    let newTask = document.createElement('li');
    newTask.innerHTML = document.getElementById("new-task-description").value;

    // adding the delete button
    newTask.appendChild(spawnDeleteButton());
    document.getElementById("tasks").appendChild(newTask);

    //adding the dropdown menu
    newTask.appendChild(spawnDropdownMenu());
    document.getElementById("tasks").appendChild(newTask);

    form.reset();
  }

  function spawnDeleteButton() {
    let nuButton = document.createElement('button');
    nuButton.innerHTML = "delete";
    nuButton.addEventListener("click", deleteToDoItem);
    return nuButton;
  }

  // A delete function that will remove tasks from your list
  function deleteToDoItem() {
    document.getElementById("tasks").removeChild(this.parentElement)
  }

  // a dropdown menu for red, yellow, or green text
  // I can't get this to work right now so I'm moving on to other taskings
  function spawnDropdownMenu() {
    let nuMenu = document.createElement('select');
    nuMenu.innerHTML = "select a color";
    //nuButton.addEventListener("select", deleteToDoItem);
    return nuMenu;
  }
});
