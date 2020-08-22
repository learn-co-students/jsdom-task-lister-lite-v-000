document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form#create-task-form").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector('#new-task-description')
    // console.log("Is this working?");
  })
});