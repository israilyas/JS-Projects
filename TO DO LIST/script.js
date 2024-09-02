let formSubmit = document.querySelector('#submit')
let form = document.querySelector('#input-form')
let toDoList = document.querySelector('#toDoList')
let taskContainer = document.querySelector('#toDolistTaskContainer')
let addTaskButton = document.querySelector('#addButton')
let deleteIcon = document.createElement('span')

deleteIcon.innerHTML=`<ion-icon name="trash-outline" style="color: white; background-color: transparent;"></ion-icon>`

formSubmit.addEventListener('click', function (e) {
    e.preventDefault()
    form.classList.add('formhide')
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Set cookies with a 5-hour expiration
    setCookie('username', username, 5);
    setCookie('email', email, 5);

    // Hide the login form and show the to-do list
    form.classList.add('formhide');
    toDoList.classList.remove('toDolistHide');
})

// Function to set cookies with expiration
function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()}`
}

// Add new task in UL 

addTaskButton.addEventListener('click', function(e){
    let newTask = document.querySelector('#taskInput').value

    if (newTask == '') {
        alert('Please enter a task')
    } else {
        let taskLi = document.createElement('li')
    taskLi.innerHTML=newTask


    // Create a new delete icon each time
    let deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = `<ion-icon name="trash-outline" style="color: white; background-color: transparent; cursor: pointer;"></ion-icon>`;
    // Optionally, add a class to the delete icon for styling or identification
    deleteIcon.classList.add('delete-icon');

    //Append icon to Li
    taskLi.append(deleteIcon)
    // Append the li to the task container
    taskContainer.appendChild(taskLi)

    document.querySelector('#taskInput').value = ''; // Clear the input field
    }
    
})