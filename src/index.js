document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

//identify DOM elements you'll need to manipulate
const form = document.getElementById("create-task-form")
const task = document.getElementById("new-task-description")  
const listItem = document.getElementById("tasks") 
let btn = ""


//add listener & prevent default action
form.addEventListener("submit", function(e) {
  e.preventDefault()
  //alert('clicked')  

//create a new list item li
const newLI = document.createElement('li')
btn = document.createElement('BUTTON')
newLI.innerText = task.value
btn.innerText = "x"
btn.id = "btn"
tasks.appendChild(newLI)
newLI.appendChild(btn)
task.value = " "
})

//set up eventListener for button but doesn't work. will come back to it later




  


  

