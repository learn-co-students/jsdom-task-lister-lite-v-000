document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("create-task-form");
	form.addEventListener("submit", function(e) {
		e.preventDefault();
		createTodo();
	});
});

function createTodo() {
	let todo = document.getElementById("new-task-description").value;
	let todoLi = document.createElement("li");
	todoLi.innerHTML =
		todo +
		"&nbsp;" +
		"<button class='delete' onclick='deleteTask(this)'>x</button>";

	let todoTaskList = document.getElementById("tasks");
	todoTaskList.appendChild(todoLi);
}

function deleteTask(task) {
	task.parentNode.remove();
}
