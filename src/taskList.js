class TaskList {
    constructor() {
        this.tasks = []
    }


//  Create a new Task.. To use in index,js.
    createNewTask(description) {
        const newTask = new TaskList(description);
        this.tasks.push(newTask);
    }


    renderTasks() {
        return this.tasks.map((task) => task.render()).join("")
    }

    deleteTask(description) {
        this.tasks = this.tasks.filter((task) => task.description !== description);
    }

}