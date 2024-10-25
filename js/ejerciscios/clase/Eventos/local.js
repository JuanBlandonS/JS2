// Capturar dtaos del formulario
const miNombre = document.getElementById("nombre")
const btnGuardar = document.getElementById("btnGuardar")
const btnActualizar = document.getElementById("actualizar")
const btnEliminar = document.getElementById("eliminar")
const miMensaje = document.getElementById("mensaje")


// Crear funciones
function guardar() {
    const nombre = miNombre.value;
    localStorage.setItem("nombreUS", nombre);
    miMensaje.textContent = `Nombre guardado con éxito, nombre: ${nombre}`;
}

function actualizar() {
    const nombre = localStorage.getItem("nombreUs")
    if (nombre) {
        miMensaje.textContent = `Bienvenido ${nombre}`
    } else {
        miMensaje.textContent = `No hay datos guardados... Escribe uno ps`
    }
}

function eliminar() {
    const nombre = localStorage.getItem("nombreUS");
    if (nombre) {
        localStorage.removeItem("nombre")
        miNombre.value = ""; // Limpia el input
        miMensaje.innerHTML = "Nombre eliminado con éxito";
    }
    
}

// Eventos
btnGuardar.addEventListener("click", guardar);
btnActualizar.addEventListener("click", actualizar);
btnEliminar.addEventListener("click", eliminar);





