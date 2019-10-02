function init() {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addTodo);
}

function addTodo(e) {
  e.preventDefault();
  const text = document.getElementById('new-task-description');
  addTolist(text.value);
  text.value = "";
}

function addTolist(text) {
    const list = document.getElementById('tasks');
    const item = document.createElement('li');
    item.innerHTML = text;
    list.appendChild(item);
}
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  init();
});
