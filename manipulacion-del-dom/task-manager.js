const taskList = document.getElementById("task-list");

loadTasksInLocalStorange();

// Add event to new task form
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const newTaskText = event.target.elements["task"].value;
    createTask(newTaskText);
    
    // Reset input
    event.target.elements["task"].value = "";
    
    storeTaskInLocalStorage(newTaskText);
});

// Add events to buttons (edit and remove [task])
taskList.addEventListener("click", (event) => {
    const clickedTarget = event.target;
    const li = clickedTarget.closest("li");
    
    if (clickedTarget.classList.contains("bi-pencil-square")) {
        editTask(li);
        updateTaskInLocalStore();
    } else if (clickedTarget.classList.contains("bi-trash")) {
        deleteTask(li);
        removeTaskFromLocalStorange(li.firstChild.textContent);
    }
});

function createTask(task) {
    const newTaskItem = document.createElement("li");
    newTaskItem.className = "list-group-item d-flex";
    newTaskItem.textContent = task;

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "ms-auto";
    buttonContainer.append(createButton("pencil-square"), createButton("trash"));
    
    newTaskItem.insertAdjacentElement("beforeend", buttonContainer);
    document.getElementById("task-list").append(newTaskItem);
}

function createButton(icon) {
    const button = document.createElement("button");
    button.className = "btn p-0 border-0 me-1";
    
    const buttonIcon = document.createElement("i");
    buttonIcon.className= "bi bi-" + icon;

    button.append(buttonIcon);

    return button;
}

function editTask(task) {
    const updateTask = prompt("Update the task:");
    if (updateTask !== null) {
        task.firstChild.textContent = updateTask;
    } 
}

function deleteTask(task) {
    if (confirm("Are you sure?")) {
        task.remove();
    }
}


function loadTasksInLocalStorange() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    for (task of tasks) {
        createTask(task);
    }
}

function storeTaskInLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskInLocalStore() {
    const tasks = Array.from(taskList.querySelectorAll("li"))
        .filter((li) => li.id !== "persistent-task")
        .map((li) => li.firstChild.textContent)
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromLocalStorange(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updateTasks = tasks.filter((taskToDelete) => taskToDelete !== task);
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
}