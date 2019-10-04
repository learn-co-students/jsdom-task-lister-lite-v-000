document.addEventListener("DOMContentLoaded", () => {

/*	let li = document.createElement('li');

	let tasks = document.getElementById("tasks");
	li.innerHTML = document.getElementById("new-task-description").innerHTML;
	tasks.appendChild(li);
	event.preventDefault();
*/


	const newTaskForm = document.getElementById("create-task-form");
	const newTaskDescription = document.getElementById("new-task-description");
	
	const taskUI = document.getElementById("tasks");

	newTaskForm.addEventListener("submit", (e) => {
	
	e.preventDefault();
		
	let li = document.createElement('li');

	li.innerHTML =	
	 `${newTaskDescription.value} <button data-description=${newTaskDescription.value}>X</button>`

	taskUI.appendChild(li);

	e.target.reset();

	});


	taskUI.addEventListener("click", (e) => {
	if(e.target.nodeName ==="BUTTON"){

	//REMIND: HOw to use debugger and Xpath!!

	debugger;

	
	let xpath = `//li[contains(text(),\'${e.target.dataset.description}\')]`; 

	let matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		matchingElement.remove();
//		document.get

	}
	});


  // your code here
});
