document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submitter = document.querySelectorAll("input")[1];
  let tasks = document.getElementById('tasks');
  
  submitter.addEventListener('click', (e) => {
      e.preventDefault();
  })
  
  submitter.onclick = function(){
    let task_name = document.getElementById('new-task-description').value;
    let new_task = document.createElement('li');
    new_task.innerText = task_name;
    tasks.appendChild(new_task);
  }
});
