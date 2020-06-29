
document.querySelector("#create-task-form").addEventListener("submit", function(event) {
        document.getElementById("tasks").innerHTML +=  "<br />";
         document.getElementById("tasks").innerHTML += document.getElementById("new-task-description").value;
         event.preventDefault();
}, false);
