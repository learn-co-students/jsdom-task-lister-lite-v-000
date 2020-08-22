document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form#create-task-form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Is this working?");
  }
});