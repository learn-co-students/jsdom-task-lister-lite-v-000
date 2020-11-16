document.addEventListener("DOMContentLoaded", () => {

   function addTask(event){

     lastid += 1;
     const newLi = document.createElement('li');

     newLi.setAttribute('id', 'item'+lastid);
     newLi.textContent = " hello" ;


     let p = document.getElementById("priority");
     let ptext = p.options[p.selectedIndex].text;


    let color;

     if (ptext === "High") {
        color = "high";
     } else if (ptext === "Medium") {
       color = "medium";
     } else {
       color = "low";
     }



    newLi.innerHTML = "<span id="+ color + ">"+" "+ptext+" "+"</span>"+ form.querySelector('#new-task-description').value;


     const button1 = document.createElement('button');
     button1.textContent = " Remove ";
     button1.addEventListener('click',removeName);
     newLi.appendChild(button1);



     document.getElementById('tasks').appendChild(newLi);
     event.preventDefault();
   }

   function removeName(event) {
    event.currentTarget.parentNode.remove()
   }




   const form =  document.getElementById('create-task-form');

   let lastid = 0;

   form.addEventListener('submit',addTask);

});
