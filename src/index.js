document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new TaskList();

  const newTaskForm = document.getElementById("create-task-form"); // returns the form object
  const newTaskDescription = document.getElementById("new-task-description"); // returns the description of the task

  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

  newTaskForm.addEventListener("submit", function(event) {
	    event.preventDefault();
	    taskList.createNewTask(newTaskDescription.value);
	    
	    event.target.reset();

	    renderApp();
	});

});

class Task {
	constructor(description) {
		this.description = description;
	}

	render() {
		return `<li>${this.description}</li>`
	}
}

class TaskList {
	constructor(){
		this.tasks = [];
	}

	createNewTask(description) {
		const newTask = new Task(description);
		this.tasks.push(newTask);
	}

  	renderTasks() {
    	return this.tasks.map((task) => task.render()).join("");
  	}
}