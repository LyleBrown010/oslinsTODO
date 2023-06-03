// get reference to the html elements 
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// event listener to button
addButton.addEventListener('click', addTask)

// load task fron local stroage when page loads 
document.addEventListener('DOMContentLoaded', loadTasks)

// fucntion add task 
function addTask(){
    // get the task from input field
    const task = taskInput.value. trim() ;   

    // return if task is empty 
    if (task === ''){
        return
    }

    // create newlist item from task 
    const listItem = document.createElement('li')
    listItem.textContent = task ; 

    // append the list item ti the task list  [li - list item child of ul using append]
    taskList.appendChild(listItem)

    // save tasks to local storage
    saveTasks()

    // clear input
    taskInput.value=' '
}

// function to save to local 
function saveTasks(){
    // get all task from task list 
    const tasks = Array.from(taskList.children).map((item).textContent)

    // store tasks in local storage as JSON string 
    localStorage.setItem('tasks', JSON.stringify(tasks))

}

// function to load tasks from local storage 
function loadTasks(){
    // get tasks from local storage 
    const savedTasks = localStorage.getItem('tasks ')

    // return if there are no saved tasks 
    if (!saveTasks){
        return
    }

    // parse the json string and create the lsit items for each task 
    const tasks = JSON.parse(savedTasks)
    tasks.ForEach ((task) =>{
        const listItem = document.createElement('li')
        listItem.textContent = task; 
        taskList.appendChild = listItem
    });
};