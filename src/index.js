document.addEventListener("DOMContentLoaded", () => {


   function addTask(event){
     const newLi = document.createElement('li');
     newLi.textContent = form.querySelector('#new-task-description').value;

    //  let textnode =  document.createTextNode(form.querySelector('#new-task-description').value);
    //  newLi.appendChild(textnode);
     document.getElementById('tasks').appendChild(newLi);
     event.preventDefault();
   }

   const form =  document.getElementById('create-task-form');


   form.addEventListener('submit',addTask);

});
