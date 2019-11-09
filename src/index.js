document.addEventListener("DOMContentLoaded", () => {
  let newTask = document.getElementsByTagName('input')[1]; //locates the submit button
  let description = document.getElementById('new-task-description'); //captures the inputfield
  let tasks = document.getElementById('tasks'); //locates the task list <ul>
  let form = document.getElementById("create-task-form");
  
  newTask.addEventListener('click', function (event) {
    event.preventDefault(); // prevents the form request from being submited
    let listItem = document.createElement('li');// creates an <li>
    let checkbox = document.createElement('input'); // creates an input tag
    checkbox.type = 'checkbox'; // assign a type to the prev. created box
    checkbox.setAttribute('class','checkbox');

    let closeButton = document.createElement('button'); //creates a <button>
    closeButton.setAttribute("class", "close"); // sets the attribute to <button>
    closeButton.textContent = 'x'; // creates the 'x' symbol inside button

    listItem.textContent = `${description.value}`;  // writes the description from the input field into the <li>    
    listItem.prepend(checkbox); //attaches the checkbox to list item
    listItem.appendChild(closeButton); //attaches the closeButton to list item

    tasks.appendChild(listItem); // inserts the <li> into the <ul>
    form.reset(); // clears the input field
  });

  tasks.addEventListener('click',function(event){
    let listItem = event.target.parentNode;
    if (event.target.className == "close"){
       let list = event.target.parentNode.parentNode;
       list.removeChild(listItem);
    };
    if (event.target.checked) {
      listItem.setAttribute("class", "checked");  
      } else {
      listItem.setAttribute("class", "unchecked");
      };
    description.focus();
  });
  
});
