document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let tasks = document.querySelector('#tasks');
  let form = document.querySelector('#create-task-form');
  
  form.addEventListener('submit', function(e){
     e.preventDefault();
    let input = form.elements[0].value;
    let priority = form.elements[1].value;
    tasks.append(input)
    tasks.append(priority)
  
     
  });
  
});
