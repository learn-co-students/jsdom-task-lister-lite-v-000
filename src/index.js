document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    let userInput = document.getElementById("new-task-description").value;
    let list = document.getElementById("tasks");
    let newTask = document.createElement('li');
    let remove = createRemoveButton();
    newTask.innerHTML = userInput;
    newTask.appendChild(remove);
    list.appendChild(newTask);
    form.reset();
  }

  function createRemoveButton() {
    let elem = document.createElement('button');
    elem.innerHTML = "X";
    elem.addEventListener("click", deleteTask)
    return elem;
  }

  function deleteTask() {
    document.getElementById("tasks").removeChild(this.parentElement)
  }
});
