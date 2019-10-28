document.addEventListener("DOMContentLoaded", () => {
  // your code here
  initialize();
});

function initialize(){
  // html node elementId = "create-task-form" action="#" method="post"
  const form = document.getElementById('create-task-form');
  // addEventListener -- adds event handler to specific element, here referencing addToDo function we're creating, on the submit action
  form.addEventListener('submit', addToDo);
}

function addToDo(e){
  // prevents default behavior on being clicked (being checked)
  e.preventDefault();
  // gets the input user is putting in
  const task = document.getElementById('new-task-description');
  // new function addToList to add item to list.
  addToList(task.value);
  text.value = "";
}

function addToList(task){
  // ul id="tasks" under ToDos
  const list = document.getElementById('tasks');
  const item = document.createElement('li');
  // setting the item on innerHTML to the user inputed task.
  item.innerHTML = task;
  // adding the new item to the list.
  list.appendChild(item);

}
