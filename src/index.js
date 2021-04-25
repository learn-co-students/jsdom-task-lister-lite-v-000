document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let getElement = (el) => document.querySelector(el);
    const submitBtn = getElement("input[type=submit]");

    let myTodos = getElement("ul#tasks");
    let makeElement = (element, txt) => {
        let el = document.createElement(element);
        el.innerText = txt;
        return el;
    };
    const taskInput = getElement("input[type=text]");
    let addClick = (el,method) => el.addEventListener("click", e => {
        e.preventDefault();
        method();
    });
    let appendHelper = (parent, child) => parent.appendChild(child);
    let clearInput = e => taskInput.value = "";
    let removeElement = el => el.remove();
    let addDelete = el => {
        let deleteBtn = makeElement("button", "X");
        appendHelper(el, deleteBtn);
        addClick(deleteBtn, (e) => removeElement(deleteBtn.parentNode));
    };
    let taskMaker = e => {
        let li = makeElement("li", taskInput.value);
        addDelete(li);
        changeColorBasedOnPriority(li);
        appendHelper(myTodos, li);
        clearInput();
    };

    const priorityColors = {high: "red", medium: "yellow", low: "green"};

    // This is a combo box of colors options appended to each li through the appender
    let makePriorities = e => {
        let prioritySelector = makeElement("select");
        for (let key in priorityColors){
            let option = makeElement("option", key);
            prioritySelector.add(option);
        }
        appendHelper(e, prioritySelector);
    };

    let changeColorBasedOnPriority = (e) => {
        const selector = e.querySelector("select");
        selector.addEventListener("change", () => {
            let selectedOption = selector.selectedOptions[0].innerText;
            let color = priorityColors[selectedOption];
            e.style.color = color;
        });
    };

    addClick(submitBtn, taskMaker);
});
