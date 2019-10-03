document.addEventListener("DOMContentLoaded", () => {
  
  makeListItem()

});


function makeListItem() {

  document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()

    let item = document.querySelector('input').value
    let li = document.createElement('li')
    li.innerHTML = item
    document.getElementById('list').appendChild(li)

    document.querySelector('input').value = ""
  })
}

