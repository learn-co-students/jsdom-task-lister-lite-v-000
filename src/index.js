document.addEventListener("DOMContentLoaded", () => {

    //form and relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
   
  newTaskForm.addEventListener('submit', newTask )
    
})
  

     function newTask (event) {
    //  Hijaked the form 
     event.preventDefault()
       console.log("Hajacked")
       
       const newTaskDescription = document.getElementById("new-task-description").value;

       var element = document.createElement('li');
         element.innerText = newTaskDescription
       document.getElementById('tasks').appendChild(element)

      //   To clear out the DOM. Ad the below line. ... Veery cool. 
    event.target.reset()
    ;

  
}
   
