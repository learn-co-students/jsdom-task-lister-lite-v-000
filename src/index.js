document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let content = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  let list = document.getElementById('tasks');
  let items = document.getElementsByClassName('item');
  form.addEventListener('submit', function(event){
    event.preventDefault();
    addTask();
  })

  list.addEventListener("click", function(e) {
    if(e.target && e.target.nodeName == 'li') {
        removeTask(e);
    }
});


  function addTask(){
    let taskContent = document.createElement('li');
      if (content.value == 0){
        alert('enter valid task');
        return
      }
    taskContent.appendChild(document.createTextNode(content.value));
    taskContent.className = 'item';
    list.appendChild(taskContent);
  }

  function removeTask(item){
   item.target.remove();
  }
});
