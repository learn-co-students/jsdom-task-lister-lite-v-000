document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');

	const addTaskToTaskList = (event) => {
		event.preventDefault();
		const tasks = document.getElementById('tasks')
		const newTask = document.createElement('li');
		let userInput = document.getElementById('new-task-description');
		newTask.innerText = userInput.value;
		tasks.appendChild(newTask);
	  userInput.value = "";
	}
	taskForm.addEventListener('submit', addTaskToTaskList);

});
