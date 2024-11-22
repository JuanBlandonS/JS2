    

// Referencia a la lista de tareas y al botón de inicio
const taskList = document.getElementById("taskList");
const startButton = document.getElementById("startButton");

// Función para agregar una tarea a la lista de tareas
function addTask(message, type) {
    const taskItem = document.createElement("li");
    taskItem.textContent = message;
    taskItem.classList.add("task-item", type);
    taskList.appendChild(taskItem);
}

// Función principal que simula el Event Loop
function executeTasks() {
    // Limpia la lista de tareas antes de comenzar
    taskList.innerHTML = "";

    // Agregar tareas sincronas
    addTask("Inicio del proceso (Sincrónico)", "sync");

    // setTimeout de 10 segundos (asíncrono)
    setTimeout(() => {
        addTask("Tarea asincrónica: setTimeout (10 segundos)", "async");
    }, 10000);

    // Promesa que se resuelve inmediatamente
    Promise.resolve().then(() => {
        addTask("Tarea asincrónica: Promesa resuelta", "promise");
    });

    // Tarea sincrónica inmediatamente después de la promesa
    addTask("Tarea sincrónica: después de la promesa", "sync");

    // setTimeout de 5 segundos (asíncrono)
    setTimeout(() => {
        addTask("Tarea asincrónica: setTimeout (5 segundos)", "async");
    }, 5000);

    // Fin del proceso
    addTask("Fin del proceso (Sincrónico)", "sync");
}

// Asignar el evento click al botón
startButton.addEventListener("click", executeTasks);
