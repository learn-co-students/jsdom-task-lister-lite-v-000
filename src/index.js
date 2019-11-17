document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");
    let item = document.getElementById("new-task-description");
    let priority = document.getElementById("priority");

    li.innerHTML = item.value += ` <button data-description=${item.value}>X</button>`;
    item.value = "";
    li.className = priority.value;

    if (priority.value === "3") {
      li.style.color = "green";
    } else if (priority.value === "2") {
      li.style.color = "orange";
    } else if (priority.value === "1") {
      li.style.color = "red";
    }

    ul.appendChild(li);
    li.addEventListener("click", function(e) {
      ul.removeChild(li);
    })
  });

  document.getElementById("sort").addEventListener("click", function(event) {
    event.preventDefault();
    sortListDir();
  })
});


function sortListDir() {
  let list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("tasks");
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    b = list.getElementsByTagName("li");

    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        if (b[i].className > b[i + 1].className) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].className < b[i + 1].className) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
