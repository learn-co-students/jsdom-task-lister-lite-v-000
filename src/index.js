document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", function (event) {
    value = document.getElementById('new-task-description').value
    newItem = document.createElement('li');
    newItem.innerText = `${value}`;
    document.getElementById("tasks").appendChild(newItem);
    event.preventDefault();
    document.getElementById('new-task-description').value = ``;
  })
});
