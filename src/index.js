document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  let ul = document.querySelector('ul#tasks');

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let taskDescrip = document.getElementById("new-task-description").value;
      let userInput = document.getElementById("new-task-description")
      ul.innerHTML += `<li>${taskDescrip} <button type ="button" onclick="remove(event)">Delete!</button></li>`;
      userInput.value = "";
    })

});

//delete fuction for onclick event 
function remove(event) {
  let button = event.target;
  let li = button.parentElement;
  li.remove();
  return false;
}



//document.getElementById('my-textbox');
// when to use querySelector and getElemetByIF
// read up about value versus textContent
