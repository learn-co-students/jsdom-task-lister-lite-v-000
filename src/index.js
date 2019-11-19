document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDescription = document.getElementById('new-task-description');
  document.querySelector('#submit').addEventListener("click", function(event) {
    
    event.preventDefault();
  }, false);
});
