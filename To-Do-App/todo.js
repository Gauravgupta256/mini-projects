const toDoInput = document.getElementById('todoInput');
const toDoBtn = document.getElementById('btn');
const toDoList = document.getElementById('todoList');

// Load saved tasks when page loads
document.addEventListener('DOMContentLoaded', loadTasks);

// Load tasks from localStorage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task));
}

toDoBtn.addEventListener('click', addTask);

function addTask() {
    const newToDoText = toDoInput.value.trim();

    if (newToDoText === "") {
        alert("Please Enter a Task first!");
        return;
    }

    createTaskElement(newToDoText);
    saveTask(newToDoText);

    toDoInput.value = "";
}

// Saving tasks to localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(taskText) {
    const newToDoItem = document.createElement('li');
    newToDoItem.innerText = taskText; 

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-todo-btn");

    deleteBtn.addEventListener('click', function() {
        newToDoItem.remove();
        deleteTask(taskText);
    });

    newToDoItem.appendChild(deleteBtn);
    toDoList.appendChild(newToDoItem);
}

// Delete tasks from localStorage
function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    // localStorage k string ko js k obj me convert karta hai JSON.stringify()
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
