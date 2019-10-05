document.addEventListener("DOMContentLoaded", () => {

    //form and relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");

   
  newTaskForm.addEventListener('submit', function (event) {
    
    //  Hijaked the form 
    event.preventDefault()
    
    //       taskList.createNewTask(newTaskDescription.value);
    // Need to Create a New Task.
    class TaskList {
      constructor() {
        this.tasks = []
      }
         createNewTask(newTaskDescription) {

          $('#tasks').html('') 
          
          const taskList = new TaskList();

          let newtask = TaskList.createNewTask(newTaskDescription.value);
          const newTask = new TaskList();
        
          this.tasks.push(newTask);

        }
        
      

      


        
       
        //       let flightHtml = newFlight.formatShow()
                  
        //       $('#new_flight').html(flightHtml)
    }


          

    //     flying.done(function (data) { 
              
    //     
            
    //      
    //     });
  });

  function Task(description) { 
    this.description = description
   }

  Taskindex.prototype.formatIndex = function () {
          let taskHTML = `
          <li>
           ${this.description}
           <button data-description="${this.description}">X</button>
          </li>
          `
          return taskHTML
       
        }

  // ..............
})
   

// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//     const taskList = new TaskList();
//     //grab all the necessary DOM elements
  
//     //form and relevant input fields
//     const newTaskForm = document.getElementById("create-task-form");
//     const newTaskDescription = document.getElementById("new-task-description");
//     const newTaskPriority = document.getElementById("new-task-priority");
  
//     //ul where new tasks will live on the DOM
//     const taskUl = document.getElementById("tasks");
  
//     const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
//     //attach event listeners
  
//   newTaskForm.addEventListener("submit", (e) => {
//       console.log("dummy message")
//     e.preventDefault();

//       taskList.createNewTask(newTaskDescription.value);
//       // reset form
//       e.target.reset();
//       renderApp();
//     });
  
//     taskUl.addEventListener("click", (e) => {
//       if (e.target.nodeName === "BUTTON") {
//         taskList.deleteTask(e.target.dataset.description);
//         renderApp();
//       }
//     });
  
  


// });
