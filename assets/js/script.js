var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

function taskFormHandler() {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']");
    var taskTypeInput = document.querySelector("select[name='task-type']");
    
    if(!taskNameInput.value || !taskTypeInput.value){
        alert("You need to fill out the task form!");
        return false;
    }

    //package data into object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    formEl.reset();

    createTaskEl(taskDataObj);
};

function createTaskEl(taskDataObj){
    //Create list Item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //Create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a classs name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name.value + "</h3> <span class='task-type'>" + taskDataObj.type.value + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire item to list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);