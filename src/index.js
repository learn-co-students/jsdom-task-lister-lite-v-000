document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("click", function(event) {
    let input = document.getElementById("new-task-description").value;
    document.getElementById("list").innerHTML += `${input}<br>`;
    event.preventDefault();
}, false);
});
