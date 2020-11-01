document.addEventListener("DOMContentLoaded", () => {  //html loaded and parsed, no images loaded yet 
  // your code here

  document.createElement("form"); //create new form element 

  document.querySelector("form").addEventListener("submit", function(event) {
   const newInput = document.getElementById("new-task-description"); //text typed into box 
   const taskHolder = document.createElement("li"); //list element to hold all items 
   const text = document.createTextNode(newInput.value) //creates a text node 
   const list = document.getElementById("tasks")

  	event.preventDefault();
  	//list.setAttribute('id', task.value); //gives list node an attribute of the text input 
    taskHolder.appendChild(text);
    list.appendChild(taskHolder);
    //task.appendChild(list);
  });

})
