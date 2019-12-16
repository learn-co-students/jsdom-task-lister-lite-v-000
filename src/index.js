document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.getElementById('create-task-form').addEventListener("submit", function(event) {
    let list = document.getElementById('tasks');
    let element = document.createElement('li');
    let item = document.getElementById("new-task-description");
    element.innerHTML = item.value;
    list.appendChild(element);
    item.value = ""
    event.preventDefault();
  }, false);

});
