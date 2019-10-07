// this ensure that HTML and CSS loads first before running JS to run on
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  //this grabs the user input, which is the task to be added to the list.
  const taskInput = document.getElementById('new-task-description').value;

  //this grabs the submit button. will add an event listener on this to sense a click. 
  const submitButton = document.querySelector("input[type = submit]");

  //this grabs the tasks table that we will be adding tasks to. we will likely be appending the
  // li element that we create using the value of taskInput 
  const taskList = document.querySelector('div#list ul#tasks');

  //Will likely create the new element then append it to the taskList that's being pointed to by taskList binding.

  submitButton.addEventListener('click', function(event){
    event.preventDefault();
    console.log("event is firing me up!");
    let li = document.createElement('li');
    console.log("just created an li");
    li.innerHTML = document.getElementById('new-task-description').value;
    console.log(li);
    taskList.appendChild(li);
  })





  

});
