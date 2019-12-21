const taskSubmit = document.querySelectorAll("input[type=submit]")[0];

function handleClick(e) {
  let toDoTask = document.querySelectorAll("input[type=text]")[0].value;
  if (toDoTask !== "") {
    let el = document.createElement("li");
    el.innerHTML = toDoTask;
    document.getElementById("tasks").appendChild(el);
    document.querySelectorAll("input[type=text]")[0].value = "";
  }
}

taskSubmit.addEventListener("click", function(e) {
  e.preventDefault();
  handleClick(e);
});