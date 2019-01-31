function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;

        // create a new li
        let newLi = document.createElement('li');

        // create a new input
        let checkbox = document.createElement('input');

        // set the input's type to checkbox
        checkbox.type = "checkbox";

        //create delete button
        let deleteButton = document.createElement('button');

        //create a text node
        let = document.createTextNode("delete")

        // set the title
        newLi.textContent = title;

        // attach the checkbox to the li
        newLi.appendChild(checkbox);
        
        //attach the delete button to the li
        newLi.appendChild(deleteButton);

        //add delete event listener
        deleteButton.addEventListener('click', () => {
        toDoList.removeChild(newLi);

        // attach the li to the ul
        toDoList.appendChild(newLi);

        //empty the input
        newToDoText.value = '';
 });     
 }

 window.onload = function() {
    onReady();
 };