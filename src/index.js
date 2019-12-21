const button = document.querySelectorAll("input[type=submit]")[0];

function handleClick(e) {
  let toDoItem = document.querySelectorAll("input[type=text]")[0].value;
  if (toDoItem != "") {
    let el = document.createElement("li");
    el.innerHTML = toDoItem;
    document.getElementById("tasks").appendChild(el);
    document.querySelectorAll("input[type=text]")[0].value = "";
  }
}

button.addEventListener("click", function(e) {
  e.preventDefault();
  handleClick(e);
});
