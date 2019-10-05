document.addEventListener("DOMContentLoaded", () => {
  document.forms[0].querySelector('input:last-of-type').addEventListener("click", (event) => {
    // Populate new task on list
    let info = document.forms[0].querySelector('input:first-of-type').value;
    document.getElementById('tasks').appendChild(document.createElement('li')).textContent = info;
    
    // Create complete button
    let btn = document.createElement('button');
    btn.className = "complete";
    btn.innerText = 'complete';
    document.querySelector('#tasks li:last-of-type').appendChild(btn);
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
    });

    // commented code below is to add subtask functions.
    // need to refigure selectors to be more specific to get it working.

    // // Create add-subtasks button
    // let stButton = document.createElement('button');
    // stButton.className = "subtask";
    // stButton.innerText = "subtask";
    // document.querySelector('#tasks li:last-of-type').appendChild(stButton);
    // stButton.addEventListener("click", () => {
    //   // Create subtask field
    //   let stField = document.createElement('input');
    //   stField.type="text";
    //   stField.placeholder="sub-task";
    //   stField.className="subtask-field";
    //   document.querySelector('#tasks li:last-of-type').appendChild(stField);
    //   // Remove add subtask button and create subtask submit button
    //   stButton.remove();
    //   let addbtn = document.createElement('button');
    //   addbtn.className = "subtask-submit";
    //   addbtn.innerText = "add subtask to list"
    //   document.querySelector('#tasks li:last-of-type').appendChild(addbtn);
    //   addbtn.addEventListener("click", () => {
    //     // Populate Subtask
    //     if(!Array.prototype.slice.call(document.querySelector('#tasks li:last-of-type').childNodes, 0).includes('ul')) {
    //       let subtaskList = document.createElement('ul');
    //       subtaskList.className="subtask-list";
    //       document.querySelector('#tasks li:last-of-type').appendChild(subtaskList);
    //     };
    //     sublistItem = document.createElement('li');
    //     sublistItem.textContent = stField.value;
    //     document.querySelector('.subtask-list').appendChild(sublistItem);
    //     stField.remove();
    //     addbtn.remove();
    //     sublistItem.parentElement.parentElement.appendChild(stButton);
    //   })
    // });


    // Clear input field
    document.forms[0].querySelector('input:first-of-type').value = ""
    
    // Prevent submit button from redirecting
    event.preventDefault();
  }, false);
})