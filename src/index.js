document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", function(e) {
    value = document.getElementById('new-task-description').value
    newItem = document.createElement('li');
    newItem.textContent = `${value}`;
    document.getElementById("tasks").appendChild(newItem);
    event.preventDefault();
    document.getElementById('new-task-description').value = ``;
  })
});
