// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   const formOne = document.getElementById('create-task-form')
//   formOne.addEventListener('submit', newTask)
//
// });
//
//   const newTask = (event) => {
//     event.preventDefault()
//     let userInput = document.getElementById("new-task-description").value
//     let newLi = document.createElement("li")
//     newLi.innerText = userInput
//
//     let firstUl = document.getElementById("tasks")
//     firstUl.appendChild(newLi)
//     event.target.reset()
// }


document.addEventListener("DOMContentLoaded", () => {

  // this is to listen for a form submission and interrupt it

  const formOne = document.getElementById("create-task-form")
  formOne.addEventListener("submit", (newTask))
});


const newTask = (event) => {
  event.preventDefault()
  let itemDescription = document.getElementById("new-task-description").value
  let newLi = document.createElement("li")
  newLi.innerText = itemDescription

  let uL = document.getElementById("tasks")
  uL.appendChild(newLi)

  let button = document.createElement("button")
  newLi.appendChild(button)

  event.target.reset()

}
//
// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   // This first line assigns the whole form, instead of just the
//   // button, to a variable. This way, once we listen for its submit action, we'll
//   // get all the information in the form. Th button would have just showed that it
//   // was clicked.
//   const formOne = document.getElementById('create-task-form')
//   formOne.addEventListener('submit', newTask)
//
// });
//
//   const newTask = (event) => {
//     event.preventDefault()
//     let userInput = document.getElementById("new-task-description").value
//     let newLi = document.createElement("li")
//     newLi.innerText = userInput
//
//     let firstUl = document.getElementById("tasks")
//     firstUl.appendChild(newLi)
//     event.target.reset()
// }
//
// // .......................
//
// //
// document.addEventListener("DOMContentLoaded", () => {
//   const formOne = document.getElementById('create-task-form')
//   formOne.addEventListener("submit", newTask)
// });







// general
// so what's kind of missing is that i would be clicking around while doing this.
// it's not just the lines i see here. But it's stitching together references to information
// that's located in different places. when i practice, i should practice not just writing
// the code but actually going to the dom, right clicking on the text field and finding its
// id, etc. that will help a lot, even if it's fewer reps. bc that's the real sequence of
// success.

// practice-
// if there was just a blank page, I would have had to put in an unordered list.
// maybe practice that?
// also just practice doing this from memory and understanding why, where everything came
// from. 5/5?
// important practice tip- for deliberate practcie on code like the above, i can break it down
// not line by line, but by what's nested. like at first I should practice document.Eventlsiterner
// with it's syntax, with nothing else. Then I'll do the next thing and see how things fit inside it.


// check out-
// that first line of newTask, the syntax


// -could have put that new function in the first one, but it's messy. encapsulate
// new logic in its own function and then pass it back as a callback. everything
// should be monoresponsbility.

// so i want to listen for the button and stop it from submitting. Then instead of
// submitting, it should clue javascript in to somehow add a new list item in the
// unordered list that's in the My Tasks div.

// i can prevent the form submit. and then use the callback function to set a list
// item, and give that item the same content as whatever they typed in. like
// set it's text as equal to a variable that has that text.


// questions-

// 1
// what's up with "function(event)" as the second argument of eventListener? since
// the code I was given for the lab, on line 1, just has empty brackets.
