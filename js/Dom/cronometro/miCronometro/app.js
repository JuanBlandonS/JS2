let tiempoMaximo = 0;
let tiempoActual = 0;
let intervalo;

const tiempoInput = document.getElementById("get-time");
const contadorTiempo = document.getElementById("time-counter");
const estado = document.getElementById("state");
const iniciar = document.getElementById("iniciar");
const detener = document.getElementById("detener");
const reiniciar = document.getElementById("reiniciar");

function formatearTiempo(segundos) {
  // Convierte los segundos en minutos y segundos
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;
  return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}

function actualizaContador() {
  contadorTiempo.textContent = formatearTiempo(tiempoActual);

  if (tiempoActual >= tiempoMaximo) {
    clearInterval(intervalo);  // Detiene el cronómetro cuando alcanza el tiempo máximo
    estado.textContent = "Tiempo terminado";
    iniciar.disabled = false;  // Habilita el botón de iniciar
    detener.disabled = true;  // Deshabilita el botón de detener
    reiniciar.disabled = false;  // Habilita el botón de reiniciar
  } else {
    tiempoActual++;  // Incrementa el tiempo actual en un segundo
  }
}

function iniciarCronometro() {
  const tiempoIngresado = parseInt(tiempoInput.value, 10);  // Obtiene el tiempo ingresado

  if (isNaN(tiempoIngresado) || tiempoIngresado <= 0) {
    alert("Por favor, ingresa un tiempo válido.");
    return;
  }

  tiempoMaximo = tiempoIngresado;  // Establece el tiempo máximo (en segundos)
  tiempoActual = 0;  // Reinicia el tiempo actual
  contadorTiempo.textContent = formatearTiempo(tiempoActual);  // Actualiza el contador visual

  intervalo = setInterval(actualizaContador, 1000);  // Llama a `actualizaContador` cada segundo

  iniciar.disabled = true;  // Deshabilita el botón de iniciar
  detener.disabled = false;  // Habilita el botón de detener
}

function detenerContador() {
  clearInterval(intervalo);  // Detiene el cronómetro
  iniciar.disabled = false;  // Habilita el botón de iniciar
  detener.disabled = true;  // Deshabilita el botón de detener
}

function reiniciarContador() {
  tiempoActual = 0;  // Reinicia el contador
  contadorTiempo.textContent = formatearTiempo(tiempoActual);  // Actualiza el contador visual
  estado.textContent = "Cronómetro reiniciado";  // Muestra el estado de reinicio

  reiniciar.disabled = true;  // Deshabilita el botón de reiniciar
  iniciar.disabled = false;  // Habilita el botón de iniciar
  detener.disabled = true;  // Deshabilita el botón de detener
}

// Añade los eventos a los botones
iniciar.addEventListener("click", iniciarCronometro);
detener.addEventListener("click", detenerContador);
reiniciar.addEventListener("click", reiniciarContador);
