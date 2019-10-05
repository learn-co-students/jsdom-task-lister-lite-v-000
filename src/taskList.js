class TaskList {
    constructor() {
        this.tasks = []
    }


//  Create a new Task.. To use in
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

// class Task{
//     constructor(description) {
//         this.description = description;
//     }

//     render() {
//         return `
//          <li>
//           ${this.description}
//           <button data-description="${this.description}">X</button>
//          </li>
//         `
//     }
// }