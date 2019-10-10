document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault()
    var 
    var li = document.createElement("li");
    var inputValue = document.getElementById("new-task-description")
    li.innerText = inputValue.value
    document.getElementById("tasks").appendChild(li);
    inputValue.value = ""
  })
});