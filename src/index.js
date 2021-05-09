document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded")
});

const form = document.getElementById("create-task-form");

form.addEventListener("submit", function(result) {
  result.preventDefault();
  let submission = result.target[0].value;
  console.log("You have a submission!");
});

function create_element_li() {
  let li = document.createElement("li");
  return li;
};

function append_element(value) {
  const ul = document.getElementById("tasks");
  let item = create_element_li()

  item.innerHTML = value
  ul.appendChild(item)
};

form.addEventListener("submit", function(result) {
  result.preventDefault();
  let submission = result.target[0].value;
  console.log("You have a submission!");
  append_element(submission)
});