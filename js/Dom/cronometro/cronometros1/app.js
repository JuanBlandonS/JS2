let tiempo1 = 0; // Tiempo del primer cronómetro
let tiempo2 = 0; // Tiempo del segundo cronómetro
let intervalo1, intervalo2; // Variables de intervalos para ambos cronómetros
let tiempoRestante1 = 0; // Tiempo restante para el primer cronómetro
let tiempoRestante2 = 0; // Tiempo restante para el segundo cronómetro

const cronometro1Elemento = document.getElementById('cronometro1');
const cronometro2Elemento = document.getElementById('cronometro2');
const iniciarBoton = document.getElementById('iniciar');
const detenerBoton = document.getElementById('detener');
const tiempoInput = document.getElementById('tiempoInput');

// Función para actualizar el cronómetro 1
function actualizarCronometro1() {
  cronometro1Elemento.textContent = `Cronómetro 1: ${tiempo1} segundos`;
  
  if (tiempo1 >= tiempoRestante1) {
    clearInterval(intervalo1); // Detenemos el primer cronómetro
    iniciarSegundoCronometro(); // Iniciamos el segundo cronómetro
  } else {
    tiempo1++; // Incrementamos el tiempo del primer cronómetro
  }
}

// Función para actualizar el cronómetro 2
function actualizarCronometro2() {
  cronometro2Elemento.textContent = `Cronómetro 2: ${tiempo2} segundos`;
  
  if (tiempo2 >= tiempoRestante2) {
    clearInterval(intervalo2); // Detenemos el segundo cronómetro
    detenerBoton.disabled = true; // Deshabilitar el botón de detener cuando ambos cronómetros hayan terminado
  } else {
    tiempo2++; // Incrementamos el tiempo del segundo cronómetro
  }
}

// Función para iniciar el primer cronómetro
function iniciarCronometro() {
  const tiempoIngresado = parseInt(tiempoInput.value, 10); // Obtener el tiempo desde el input
  if (isNaN(tiempoIngresado) || tiempoIngresado <= 0) {
    alert("Por favor, ingresa un tiempo válido.");
    return;
  }

  // Inicializamos el cronómetro 1
  tiempoRestante1 = tiempoIngresado; // Definir el tiempo total para el cronómetro 1
  tiempo1 = 0; // Resetear el contador del primer cronómetro
  cronometro1Elemento.textContent = `Cronómetro 1: ${tiempo1} segundos`;

  // Iniciar el cronómetro 1
  intervalo1 = setInterval(actualizarCronometro1, 1000);
  
  // Deshabilitar el botón de inicio y habilitar el botón de detener
  iniciarBoton.disabled = true;
  detenerBoton.disabled = false;
}

// Función para iniciar el segundo cronómetro con el mismo tiempo
function iniciarSegundoCronometro() {
  tiempoRestante2 = tiempoRestante1; // Usamos el mismo tiempo del primer cronómetro
  tiempo2 = 0; // Reiniciar el contador del segundo cronómetro
  cronometro2Elemento.textContent = `Cronómetro 2: ${tiempo2} segundos`;

  // Iniciar el cronómetro 2
  intervalo2 = setInterval(actualizarCronometro2, 1000);
}

// Función para detener ambos cronómetros
function detenerCronometro() {
  clearInterval(intervalo1);
  clearInterval(intervalo2);
  detenerBoton.disabled = true; // Deshabilitar el botón de detener
  iniciarBoton.disabled = false; // Habilitar el botón de inicio
}

// Event listeners
iniciarBoton.addEventListener('click', iniciarCronometro);
detenerBoton.addEventListener('click', detenerCronometro);
