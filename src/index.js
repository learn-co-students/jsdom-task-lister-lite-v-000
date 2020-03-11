document.addEventListener("DOMContentLoaded", () => {
  submit()
});

function submit() {
  let form = document.getElementById("create-task-form")
  form.addEventListener('submit', function(e){
    e.preventDefault()
    let input = document.getElementById("new-task-description")
    let ul = document.getElementById("tasks")
    let li = document.createElement("li")
    li.innerHTML = input.value
    ul.append(li)
  })
  
}