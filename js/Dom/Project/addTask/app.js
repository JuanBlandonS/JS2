const taskForm=document.getElementById("task-form");

const taskList=document.getElementById("task-list");

loadTask ()

taskForm.addEventListener("submit",(event)=>{

    event.preventDefault();

    const taskInput=document.getElementById("task-input");

    const task=taskInput.value;

    // console.log(task);

    if(task){
        taskList.append(createTaskElement(task));

        storeTaskInLocalStorage(task);

        taskInput.value="";
    }
});

function createTaskElement(task){

    const li = document.createElement("li");

    li.textContent= task;
    li.append(
    createButton("❌","delete-btn"),
    createButton("✏️","edit-btn"));
    return li; 
}

function createButton(text,className){

    const btn = document.createElement("span");
    btn.textContent = text;
    btn.className = className;
    return btn;
}



taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) { 

        deleteTask(event.target.parentElement);

    } else if(event.target.classList.contains("edit-btn")){

        editTask(event.target.parentElement);
    }
})

function deleteTask(taskItem){

    if(confirm("Estas segruo de que quiere eliminarlo?")){
        const taskContent = taskItem.firstChild.textContent;  // Obtén el contenido de la tarea antes de eliminarlo

        taskItem.remove();
        removeFromLocalStorage(taskContent);
    }
}

function editTask(taskItem){

    const newtask = prompt("Edita la tarea: ", taskItem.firstChild.textContent)
    if (newtask !== null) {
        taskItem.firstChild.textContent = newtask;

        updateLocalStorage();        
    }
}

function storeTaskInLocalStorage (task){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTask (){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    tasks.forEach((task) => {
        taskList.appendChild(createTaskElement(task));
    })
}

function updateLocalStorage () {

    const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => li.textContent);

    localStorage.setItem("tasks", JSON.stringify( tasks ));
}

function removeFromLocalStorage(tasksContent){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    const updateTasks = tasks.filter((task) => task !== tasksContent);

    localStorage.setItem("tasks",JSON.stringify(updateTasks))
}


const themeTogglebutton = document.getElementById("toggle-theme-btn")

const currentTheme = localStorage.getItem("theme")


themeTogglebutton.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme")

    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light" 

    localStorage.setItem("theme", theme)
})


if (currentTheme === "dark" ){
    document.body.classList.add("dark-theme")
}