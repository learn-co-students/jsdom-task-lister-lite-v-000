document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");
    let item = document.getElementById("new-task-description");
    li.innerHTML = item.value += ` <button data-description=${item.value}>X</button>`
    item.value = "";
    ul.appendChild(li);
    li.addEventListener("click", function(e) {
      ul.removeChild(li);
    })
  });
});
