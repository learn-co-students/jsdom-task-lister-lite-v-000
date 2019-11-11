document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('form');
  const ul = document.querySelector('ul');
  const list = document.getElementById('list');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let input = document.getElementById('new-task-description').value;
    let li = document.createElement('li');
    let button = document.createElement('button');
    li.innerHTML = input;
    button.innerHTML = 'X';
    li.appendChild(button);
    ul.appendChild(li);
  });

  list.addEventListener('click', function(e) {
    let button = this.querySelector('button');
    button.parentNode.remove();
  });


  // your code here
});
