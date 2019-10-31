document.addEventListener("DOMContentLoaded", () => {


  const submitbutton = document.getElementById('main-content').querySelectorAll('form input');
  submitbutton[1].addEventListener('click', function(event) {
    let textsubmission = submitbutton[0].value;
    let li = document.createElement('li');
    li.innerHTML = textsubmission;
    let ul = document.getElementById('tasks');
    ul.appendChild(li)
    event.preventDefault();
  });

  console.log("The DOM has loaded");
});
