document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("input[value='Create New Task']")
  submitButton.addEventListener("click", function(event){
    const newTaskText = document.getElementById("new-task-description").value;
    const newTaskElement = document.createElement("li");
    newTaskElement.innerHTML = newTaskText + "<input class='delete' type='submit' value='X'>";
    let taskList = document.getElementById("tasks");
    taskList.appendChild(newTaskElement);
    event.preventDefault();
  });
  // const deleteButtons = document.getElementsByClassName("delete");
  // let tasks = document.getElementsByTagName("li");
  // for (let i = 0; i < deleteButtons.length; i++){
  //     deleteButtons[i].addEventListener("click", function(event){
  //     tasks[i].remove();
  //     event.preventDefault();
  //   });
  // }
});
