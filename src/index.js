document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.getElementById('create-task-form').addEventListener("submit", function(event) {
    let items = document.getElementById('tasks');
    let element = document.createElement('li');
    let item = document.getElementById("new-task-description");
    let tasks = document.querySelectorAll('div#list ul li button');

    element.innerHTML = `${item.value} <button data-description="${item.value}">x</button>`;
    list.appendChild(element);
    item.value = "";
    event.preventDefault();
  });

  tasks.addEventListener('click', function(event) {
    const comment = event.target.parentElement
    comment.remove();
  });

});
