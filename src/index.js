// document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit-btn").addEventListener('click', function(event){
	  event.preventDefault();
	  let newItem = document.createElement("li");
	  newItem.innerHTML = document.getElementById("new-task-description").value;
	  let fullList = document.querySelector("ul");
	  fullList.appendChild(newItem);
	});
// });
