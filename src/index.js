document.addEventListener("DOMContentLoaded", () => {

  const ul = document.getElementById("tasks");

  document.querySelector('form').addEventListener('submit', (e) => {
    const li = document.createElement('li')
    const taskDesc = document.getElementById("new-task-description").value;
    e.preventDefault();
    li.innerHTML = taskDesc
    ul.append(li);
    document.querySelector('input').value = "";
  });
});
