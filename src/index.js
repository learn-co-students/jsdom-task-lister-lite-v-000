

document.addEventListener("DOMContentLoaded", () => {
  addItem()

});

function addItem() {
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let item = document.getElementById('new-task-description');
    let li = document.createElement('li');
    li.innerHTML = item.value;
    document.getElementById('list').appendChild(li);
    e.target.reset();
  })
}
