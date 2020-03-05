document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  let tasks = document.getElementById('tasks');

  form.addEventListener('submit', function(event){
    event.preventDefault();
    const input = document.getElementById('new-task-description');

    let li = document.createElement("li");
    li.innerHTML = input.value;
    tasks.appendChild(li);
  });
});
