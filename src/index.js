document.addEventListener('DOMContentLoaded', () => {
	// your code here
	const taskList = new TaskList();

	const newTaskForm = document.getElementById('create-task-form');
	const newTaskDescription = document.getElementById('new-task-description');
	const newTaskPriority = document.getElementById('list');

	const taskUl = document.getElementById('tasks');

	const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

	console.log();

	newTaskForm.addEventListener('submit', (e) => {
		e.preventDefault();
		taskList.createNewTask(newTaskDescription.value);
		e.target.reset();
		renderApp();
	});

	taskUl.addEventListener('click', (e) => {
		if (e.target.nodeName === 'Button') {
			taskList.deleteTask(e.target.dataset.description);
			renderApp();
		}
	});
});
