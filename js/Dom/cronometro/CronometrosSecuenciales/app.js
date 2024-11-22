let tiempoMaximo = 0;
let tiempoActual1 = 0;
let tiempoActual2 = 0;
let intervalo1, intervalo2;
let temporizadorActivo = 1; // Para controlar cuál temporizador está activo

const tiempoInput = document.getElementById("get-time");
const contadorTiempo1 = document.getElementById("time-counter-1");
const estado1 = document.getElementById("state-1");

const contadorTiempo2 = document.getElementById("time-counter-2");
const estado2 = document.getElementById("state-2");

const iniciar = document.getElementById("iniciar");
const detener = document.getElementById("detener");
const reiniciar = document.getElementById("reiniciar");

function formatearTiempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;
  return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}

function actualizaContador1() {
  contadorTiempo1.textContent = formatearTiempo(tiempoActual1);

  if (tiempoActual1 >= tiempoMaximo) {
    clearInterval(intervalo1);
    estado1.textContent = "Tiempo del Temporizador 1 terminado";
    temporizadorActivo = 2; // Cambiar al temporizador 2
    estado2.textContent = "Temporizador 2 comenzando...";
    iniciarTemporizador2();
  } else {
    tiempoActual1++;
  }
}

function actualizaContador2() {
  contadorTiempo2.textContent = formatearTiempo(tiempoActual2);

  if (tiempoActual2 >= tiempoMaximo) {
    clearInterval(intervalo2);
    estado2.textContent = "Tiempo del Temporizador 2 terminado";
    iniciar.disabled = false; // Habilitar botón Iniciar
    detener.disabled = true;  // Deshabilitar botón Detener
    reiniciar.disabled = false; // Habilitar botón Reiniciar
  } else {
    tiempoActual2++;
  }
}

function iniciarTemporizador1() {
  const tiempoIngresado = parseInt(tiempoInput.value, 10);
  estado1.textContent = "Ejecutando..."

  if (isNaN(tiempoIngresado) || tiempoIngresado <= 0) {
    alert("Por favor, ingresa un tiempo válido.");
    return;
  }

  tiempoMaximo = tiempoIngresado;
  tiempoActual1 = 0;
  contadorTiempo1.textContent = formatearTiempo(tiempoActual1);

  intervalo1 = setInterval(actualizaContador1, 1000);

  iniciar.disabled = true;
  detener.disabled = false;
}

function iniciarTemporizador2() {
  tiempoActual2 = 0;
  contadorTiempo2.textContent = formatearTiempo(tiempoActual2);
  estado2.textContent = "Ejecutando..."

  intervalo2 = setInterval(actualizaContador2, 1000);

  iniciar.disabled = true;
  detener.disabled = false;
}

function detenerContador() {
  if (temporizadorActivo === 1) {
    clearInterval(intervalo1);
    estado1.textContent = "En Pausa";
  } else {
    clearInterval(intervalo2);
    estado2.textContent = "En Pausa";
  }
  iniciar.disabled = false;
  detener.disabled = true;
}

function reiniciarContador() {
  if (temporizadorActivo === 1) {
    tiempoActual1 = 0;
    contadorTiempo1.textContent = formatearTiempo(tiempoActual1);
    estado1.textContent = "Temporizador 1 reiniciado";
  } else {
    tiempoActual2 = 0;
    contadorTiempo2.textContent = formatearTiempo(tiempoActual2);
    estado2.textContent = "Temporizador 2 reiniciado";
  }

  reiniciar.disabled = true;
  iniciar.disabled = false;
  detener.disabled = true;
}

iniciar.addEventListener("click", () => {
  if (temporizadorActivo === 1) {
    iniciarTemporizador1();
  } else {
    iniciarTemporizador2();
  }
});

detener.addEventListener("click", detenerContador);
reiniciar.addEventListener("click", reiniciarContador);
  