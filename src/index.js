document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let submit = document.getElementById("submit");
  let description = document.getElementById("new-task-description");
  let tasts = document.getElementById("tasks")
  let form = document.getElementById('create-task-form');

  submit.addEventListener("click", function(e) {
    let li = document.createElement("li")
    li.innerHTML = description.value
    tasks.appendChild(li);
    e.preventDefault();
  })

});
