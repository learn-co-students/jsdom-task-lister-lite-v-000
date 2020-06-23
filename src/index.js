document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", (event) => {
    getFormData();
    event.preventDefault();
  }, false);
});

function getFormData(){
  let taskText = document.getElementById("new-task-description").value.trim();
  if (checkInputText(taskText, "Task needs a name")) return;
  addTask(taskText);
}

function checkInputText (taskText, msg){
  if (taskText== ""){
    alert(msg);
    return true;
  } else {
    false;
  }
}

function addTask(taskText) {
  let tasks = document.getElementById("tasks");
  tasks.appendChild(createLi(taskText));
}

function createLi(taskText){
  let li = document.createElement("li");
  li.innerText = `${taskText}`;
  li.appendChild(createDeleteButton());
  return li;

}

function createDeleteButton(){
  let button =  document.createElement("button");
  button.innerText="X";
  button.addEventListener("click",(event) => {
    tasks.removeChild(event.currentTarget.parentElement);
  });
  return button;
}
