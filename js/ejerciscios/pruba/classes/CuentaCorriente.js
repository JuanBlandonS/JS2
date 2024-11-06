import Cuenta from './Cuenta.js';

export default class CuentaCorriente extends Cuenta {
    constructor(numeroCuenta, saldo = 0) {
        super(numeroCuenta, saldo);
        this.sobregiro = 500000;
    }

    realizarRetiro(monto) {
        if (this.saldo + this.sobregiro >= monto) {
            this.saldo -= monto;
        } else {
            alert("Saldo insuficiente incluso con sobregiro");
        }
    }
}
