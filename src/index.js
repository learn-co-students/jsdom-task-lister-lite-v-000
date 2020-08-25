document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  const tasks = document.querySelector("#tasks");

  form.addEventListener('submit', event =>{
    let input = document.querySelector("#new-task-description").value;
    list.innerHTML += `<li style="color: green" data-priority="3"> ${input} <button>Click me</button>
      <select>
        <option value="3">Low</option>
        <option value="2">Medium</option>
        <option value="1">High</option>
      </select>
    </li>`;
    event.preventDefault();
  });

  list.addEventListener('click', event =>{
    if (event.target.nodeName === "BUTTON"){
      event.target.parentElement.remove()
    }
  })

  list.addEventListener('change', event =>{
    let targetValue = parseInt(event.target.value);
    let color;

    switch(targetValue) {
      case 1:
        color = "red"
        break;
      case 2:
        color = "yellow"
        break;
      case 3:
        color = "green"
        break;
      }

      event.target.parentElement.dataset.priority = targetValue;
      event.target.parentElement.style.color = color;

      // const tasks = document.querySelector("#tasks");
      //
      // const sorted = Array.from(tasks.children).sort((a,b)=> {
      //   return b.dataset.priority < a.dataset.priority ? 1 : -1
      // });

  })
});
