document.addEventListener("DOMContentLoaded", () => {
  
  const submitInput = document.querySelector('form input[type=submit]');
  
  submitInput.addEventListener('click', function(event) {

    const inputText = document.getElementById('new-task-description').value;
    const toDoItem = document.createElement('li');

    document.getElementById('tasks').appendChild(toDoItem);
    toDoItem.innerHTML = inputText;
    event.preventDefault();

  });

});