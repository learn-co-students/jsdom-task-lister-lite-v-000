document.addEventListener("DOMContentLoaded", () => {
  const task = document.getElementById("new-task-description")
  const submit = document.getElementById("submit");
  const list = document.getElementById("list");

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    let todo = task.value;
    list.innerHTML += `<div id="list-${todo}"><li>${todo}<button>X</button></div>`;
  });
});