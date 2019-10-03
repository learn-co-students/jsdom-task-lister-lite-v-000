document.addEventListener("DOMContentLoaded", () => {
	const submitForm = document.getElementById("create-task-form")	
	submitForm.addEventListener('submit', addTask)
});

const addTask = (event) => {
	event.preventDefault();
	const taskString = document.getElementById("new-task-description")
	const li = document.createElement('li')
	li.innerHTML = taskString.value
	appendNewTask(li) 
	event.target.reset()
}

const appendNewTask = (task) => {
	const ul = document.getElementById('tasks')
	ul.appendChild(task)

}
