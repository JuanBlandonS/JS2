import Cliente from './classes/Cliente.js';
import Cuenta from './classes/Cuenta.js';
import CuentaCorriente from './classes/CuentaCorriente.js';
import CuentaAhorros from './classes/CuentaAhorros.js';

let clienteActual = null;

function iniciarSesion() {
    const userId = document.getElementById("user-id").value;
    // Validar usuario, ejemplo básico:
    if (userId === "1234") {
        clienteActual = new Cliente("Juan", "Perez", "Calle Falsa 123", "1234");
        document.getElementById("auth").style.display = "none";
        document.getElementById("transacciones").style.display = "block";
    } else {
        alert("Usuario no válido");
    }
}

function cerrarSesion() {
    clienteActual = null;
    document.getElementById("auth").style.display = "block";
    document.getElementById("transacciones").style.display = "none";
}

// Funciones de transacciones
function mostrarSaldo() {
    if (clienteActual) {
        alert(`Saldo actual: ${clienteActual.cuenta.consultarSaldo()}`);
    }
}

function depositar() {
    const monto = prompt("Ingrese el monto a depositar:");
    clienteActual.cuenta.realizarDeposito(parseFloat(monto));
    mostrarSaldo();
}

function retirar() {
    const monto = prompt("Ingrese el monto a retirar:");
    clienteActual.cuenta.realizarRetiro(parseFloat(monto));
    mostrarSaldo();
}

function consultarMovimientos() {
    alert("Movimientos recientes: ..."); // Implementación adicional
}
