let tiempo = 0; // Variable para almacenar el tiempo
let intervalo;
let tiempoRestante = 0; // Duración total del cronómetro

const cronometroElemento = document.getElementById('cronometro');
const iniciarBoton = document.getElementById('iniciar');
const detenerBoton = document.getElementById('detener');
const tiempoInput = document.getElementById('tiempoInput');

// Función para actualizar el cronómetro en la página
function actualizarCronometro() {
  cronometroElemento.textContent = `${tiempo} segundos`;
  if (tiempo >= tiempoRestante) {
    clearInterval(intervalo); // Detener el cronómetro cuando llega al tiempo final
    detenerBoton.disabled = true; // Deshabilitar el botón "Detener"
    iniciarBoton.disabled = false; // Habilitar el botón "Iniciar"
    alert("El cronómetro ha terminado");
  } else {
    tiempo++; // Incrementamos el tiempo
  }
}

// Función para iniciar el cronómetro
function iniciarCronometro() {
  const tiempoIngresado = parseInt(tiempoInput.value, 10); // Obtener el tiempo desde el input
  if (isNaN(tiempoIngresado) || tiempoIngresado <= 0) {
    alert("Por favor, ingresa un tiempo válido.");
    return;
  }

  tiempoRestante = tiempoIngresado; // Definir el tiempo restante
  tiempo = 0; // Resetear el contador de tiempo
  cronometroElemento.textContent = `${tiempo} segundos`; // Mostrar el tiempo inicial

  intervalo = setInterval(actualizarCronometro, 1000); // Ejecutar la función cada segundo
  iniciarBoton.disabled = true; // Deshabilitar el botón "Iniciar" mientras el cronómetro está corriendo
  detenerBoton.disabled = false; // Habilitar el botón "Detener"
}

// Función para detener el cronómetro
function detenerCronometro() {
  clearInterval(intervalo); // Detener el setInterval
  detenerBoton.disabled = true; // Deshabilitar el botón "Detener"
  iniciarBoton.disabled = false; // Habilitar el botón "Iniciar"
  alert("Cronómetro detenido");
}

// Event listeners
iniciarBoton.addEventListener('click', iniciarCronometro);
detenerBoton.addEventListener('click', detenerCronometro);
