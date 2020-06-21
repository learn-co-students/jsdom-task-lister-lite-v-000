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
  let li = document.createElement("li");
  li.innerHTML = `${taskText} - ${addDelete()}`;
  document.getElementById("tasks").appendChild(li);
}
function addDelete(){
  return `<a href="#" class="removeTask">Delete</a>`
}
