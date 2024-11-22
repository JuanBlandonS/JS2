let tiempoMaximo1 = 0;
let tiempoMaximo2 = 0;
let tiempoMaximo3 = 0;
let tiempoActual1 = 0;
let tiempoActual2 = 0;
let tiempoActual3 = 0;
let intervalo1, intervalo2, intervalo3;

const tiempoInput1 = document.getElementById("get-time-1");
const tiempoInput2 = document.getElementById("get-time-2");
const tiempoInput3 = document.getElementById("get-time-3");

const contadorTiempo1 = document.getElementById("time-counter-1");
const contadorTiempo2 = document.getElementById("time-counter-2");
const contadorTiempo3 = document.getElementById("time-counter-3");

const estado1 = document.getElementById("state-1");
const estado2 = document.getElementById("state-2");
const estado3 = document.getElementById("state-3");

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
  if (tiempoActual1 >= tiempoMaximo1) {
    clearInterval(intervalo1);
    estado1.textContent = "Temporizador 1 terminado";
  } else {
    tiempoActual1++;
  }
}

function actualizaContador2() {
  contadorTiempo2.textContent = formatearTiempo(tiempoActual2);
  if (tiempoActual2 >= tiempoMaximo2) {
    clearInterval(intervalo2);
    estado2.textContent = "Temporizador 2 terminado";
  } else {
    tiempoActual2++;
  }
}

function actualizaContador3() {
  contadorTiempo3.textContent = formatearTiempo(tiempoActual3);
  if (tiempoActual3 >= tiempoMaximo3) {
    clearInterval(intervalo3);
    estado3.textContent = "Temporizador 3 terminado";
  } else {
    tiempoActual3++;
  }
}

function iniciarTemporizadores() {
  // Obtener los tiempos ingresados para cada temporizador
  const tiempoIngresado1 = parseInt(tiempoInput1.value, 10);
  const tiempoIngresado2 = parseInt(tiempoInput2.value, 10);
  const tiempoIngresado3 = parseInt(tiempoInput3.value, 10);

  if (isNaN(tiempoIngresado1) || tiempoIngresado1 <= 0 ||
      isNaN(tiempoIngresado2) || tiempoIngresado2 <= 0 ||
      isNaN(tiempoIngresado3) || tiempoIngresado3 <= 0) {
    alert("Por favor, ingresa tiempos válidos para todos los temporizadores.");
    return;
  }

  tiempoMaximo1 = tiempoIngresado1;
  tiempoMaximo2 = tiempoIngresado2;
  tiempoMaximo3 = tiempoIngresado3;

  tiempoActual1 = 0;
  tiempoActual2 = 0;
  tiempoActual3 = 0;

  contadorTiempo1.textContent = formatearTiempo(tiempoActual1);
  contadorTiempo2.textContent = formatearTiempo(tiempoActual2);
  contadorTiempo3.textContent = formatearTiempo(tiempoActual3);

  estado1.textContent = "Ejecutándose...";
  estado2.textContent = "Ejecutándose...";
  estado3.textContent = "Ejecutándose...";

  // Iniciar los temporizadores simultáneamente
  intervalo1 = setInterval(actualizaContador1, 1000);
  intervalo2 = setInterval(actualizaContador2, 1000);
  intervalo3 = setInterval(actualizaContador3, 1000);

  iniciar.disabled = true;
  detener.disabled = false;
  reiniciar.disabled = false;
}

function detenerContador() {
  clearInterval(intervalo1);
  clearInterval(intervalo2);
  clearInterval(intervalo3);
  estado1.textContent = "En pausa";
  estado2.textContent = "En pausa";
  estado3.textContent = "En pausa";
  
  iniciar.disabled = false;
  detener.disabled = true;
}

function reiniciarContador() {
  tiempoActual1 = 0;
  tiempoActual2 = 0;
  tiempoActual3 = 0;

  contadorTiempo1.textContent = formatearTiempo(tiempoActual1);
  contadorTiempo2.textContent = formatearTiempo(tiempoActual2);
  contadorTiempo3.textContent = formatearTiempo(tiempoActual3);

  estado1.textContent = "Temporizador 1 reiniciado";
  estado2.textContent = "Temporizador 2 reiniciado";
  estado3.textContent = "Temporizador 3 reiniciado";

  reiniciar.disabled = true;
  iniciar.disabled = false;
  detener.disabled = true;
}

iniciar.addEventListener("click", iniciarTemporizadores);
detener.addEventListener("click", detenerContador);
reiniciar.addEventListener("click", reiniciarContador);
