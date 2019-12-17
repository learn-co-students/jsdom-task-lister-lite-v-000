document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let tasks = document.getElementById('tasks');
  let item = document.getElementById("new-task-description");
  let unorderedList = document.querySelector('div#list ul');

  document.getElementById('create-task-form').addEventListener("submit", function(event) {
    let element = document.createElement('li');
    element.innerHTML = `${item.value} <button>x</button>`;
    tasks.appendChild(element);
    item.value = "";
    event.preventDefault();
  });

  unorderedList.addEventListener('click', function(event) {
    const li = event.toElement.tagName;
    const comment = event.target.parentElement
    if (li === "BUTTON") {
      comment.remove();
    };
  });

});
