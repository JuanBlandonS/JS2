// Array de usuarios (simula una base de datos)
const usuarios = [
  // Los usuarios ya registrados manualmente pueden tener saldo 5000
  {
    nombreCompleto: "Juan Esteban",
    correoElectronico: "juan@correo.com",
    telefono: "123456789",
    tipoCuenta: "Ahorros",
    usuario: "juanesteban",
    contrasena: "12345",
    saldo: 5000,  // Saldo base de 5000
    movimientos: []
  },
  {
    nombreCompleto: "Maria Lopez",
    correoElectronico: "maria@correo.com",
    telefono: "987654321",
    tipoCuenta: "Cuenta Corriente",
    usuario: "maria",
    contrasena: "67890",
    saldo: 5000,  // Saldo base de 5000
    movimientos: []
  }
];

// Función para mostrar y ocultar secciones
function showSection(sectionId) {
  document.querySelectorAll('.section-content').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Función para registrar al usuario
function registrarUsuario(event) {
  event.preventDefault(); // Evita el envío del formulario y el recargo de la página

  // Obtener los valores del formulario de registro
  const nombreCompleto = document.getElementById('full-name').value;
  const correoElectronico = document.getElementById('email').value;
  const telefono = document.getElementById('phone').value;
  const tipoCuenta = document.getElementById('accountType').value;
  const usuario = document.getElementById('register-username').value;
  const contrasena = document.getElementById('register-password').value;

  // Crear un nuevo objeto de usuario con un saldo inicial de 5000
  const nuevoUsuario = {
    nombreCompleto,
    correoElectronico,
    telefono,
    tipoCuenta,
    usuario,
    contrasena,
    saldo: 5000,  // Saldo base de 5000
    movimientos: []  // Lista vacía de movimientos
  };

  // Agregar el nuevo usuario al array de usuarios
  usuarios.push(nuevoUsuario);

  // Limpiar el formulario de registro
  document.getElementById('form-register').reset();

  // Mostrar mensaje de éxito
  alert('Usuario registrado exitosamente con saldo base de $5000!');

  // Mostrar sección de inicio de sesión después del registro
  showSection('iniciar-sesion');
}

// Función para iniciar sesión
function iniciarSesion(event) {
  event.preventDefault(); // Evita el envío del formulario

  const usuarioIngresado = document.getElementById('username').value;
  const contrasenaIngresada = document.getElementById('password').value;

  // Buscar al usuario en el array de usuarios
  const usuarioEncontrado = usuarios.find(user => user.usuario === usuarioIngresado && user.contrasena === contrasenaIngresada);

  if (usuarioEncontrado) {
    // Guardar el usuario activo en el localStorage
    localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));
    alert(`Bienvenido, ${usuarioEncontrado.nombreCompleto}!`);
    // Redirigir a la página bancaria
    window.location.href = 'banco.html';  // Cambia por la URL de la página bancaria
  } else {
    alert('Usuario o contraseña incorrectos. Intenta de nuevo.');
  }
}