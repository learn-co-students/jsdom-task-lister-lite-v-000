document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // save the task from the input field
  // click some sort of a submit button
  // task can appear on the DOM after submit button has been activated

  var elem = document.querySelector("#create-task-form")



  function jake(event){
    event.preventDefault();
    var node = document.createElement("LI")
    var textnode = document.createTextNode(document.getElementById("new-task-description").value)
    node.appendChild(textnode)
    document.getElementById("tasks").appendChild(node)
  }

  if (elem.addEventListener){
    elem.addEventListener("submit",jake,false)
  }







})
