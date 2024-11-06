// Array para almacenar los usuarios
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Datos de usuario activo (guardado en localStorage al iniciar sesión)
let usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo')) || null;

// Función para mostrar las secciones
function mostrarSeccion(seccion) {
  // Ocultar todas las secciones
  document.querySelectorAll('.transaccion-seccion').forEach(section => {
    section.style.display = 'none';
  });

  // Mostrar la sección seleccionada
  document.getElementById(seccion).style.display = 'block';
}

// Función para procesar el retiro de dinero
function procesarRetiro() {
  const monto = parseFloat(document.getElementById('monto-retirar').value);

  // Verificar si el monto es válido
  if (isNaN(monto) || monto <= 0) {
    document.getElementById('mensaje-retirar').textContent = 'Por favor, ingresa un monto válido.';
    return;
  }

  // Verificar si el saldo es suficiente
  if (monto > usuarioActivo.saldo) {
    document.getElementById('mensaje-retirar').textContent = 'Saldo insuficiente.';
    return;
  }

  // Realizar el retiro
  usuarioActivo.saldo -= monto;
  usuarioActivo.movimientos.push(`Retiro: $${monto}`);

  // Actualizar en el localStorage
  localStorage.setItem('usuarioActivo', JSON.stringify(usuarioActivo));

  // Mostrar el mensaje
  document.getElementById('mensaje-retirar').textContent = `Has retirado $${monto}. Saldo actual: $${usuarioActivo.saldo}`;

  // Actualizar la sección de movimientos
  consultarMovimientos();
}

// Función para procesar la consignación de dinero
function procesarConsignacion() {
  const monto = parseFloat(document.getElementById('monto-consignar').value);

  // Verificar si el monto es válido
  if (isNaN(monto) || monto <= 0) {
    document.getElementById('mensaje-consignar').textContent = 'Por favor, ingresa un monto válido.';
    return;
  }

  // Realizar la consignación
  usuarioActivo.saldo += monto;
  usuarioActivo.movimientos.push(`Consignación: $${monto}`);

  // Actualizar en el localStorage
  localStorage.setItem('usuarioActivo', JSON.stringify(usuarioActivo));

  // Mostrar el mensaje
  document.getElementById('mensaje-consignar').textContent = `Has consignado $${monto}. Saldo actual: $${usuarioActivo.saldo}`;

  // Actualizar la sección de movimientos
  consultarMovimientos();
}

// Función para consultar los movimientos del usuario
function consultarMovimientos() {
  const movimientosDiv = document.getElementById('movimientos');
  movimientosDiv.innerHTML = `
    <h3>Últimos Movimientos:</h3>
    <ul>
      ${usuarioActivo.movimientos.map(mov => `<li>${mov}</li>`).join('')}
    </ul>
    <p><strong>Saldo Actual:</strong> $${usuarioActivo.saldo}</p>
  `;
}

// Función para consultar el saldo del usuario
function consultarSaldo() {
  const saldoDiv = document.getElementById('saldo');
  saldoDiv.textContent = `Tu saldo actual es: $${usuarioActivo.saldo}`;
}

// Función para cerrar sesión
function cerrarSesion() {
  localStorage.removeItem('usuarioActivo');
  window.location.href = 'index.html';  // Redirigir a la página de login
}

// Consultar saldo al iniciar sesión
if (usuarioActivo) {
  consultarSaldo();
  consultarMovimientos();
}
