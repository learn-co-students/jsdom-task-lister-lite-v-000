document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('input[type="submit"]').addEventListener("submit", function(event) {
    event.preventDefault();
  }, false);

});
