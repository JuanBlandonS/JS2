import Cuenta from './Cuenta.js';

export default class CuentaAhorros extends Cuenta {
    constructor(numeroCuenta, saldo = 0) {
        super(numeroCuenta, saldo);
        this.movimientos = [];
    }

    realizarRetiro(monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            this.movimientos.push(`Retiro: ${monto}`);
        } else {
            alert("Saldo insuficiente");
        }
    }

    consultarMovimientos() {
        return this.movimientos;
    }
}
