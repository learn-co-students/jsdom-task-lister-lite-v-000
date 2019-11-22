document.addEventListener("DOMContentLoaded", () => {

  let input = document.getElementById("new-task-description");
  let form = document.getElementById("create-task-form");

  form.addEventListener("submit", addTasktoList);

  const addTaskToList = event => {
    event.preventDefault();

    let li = document.createElement('li');

    li.innerText = input.value;

    appendNewTask(li);
    event.target.reset();
  };

  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
  };


});
