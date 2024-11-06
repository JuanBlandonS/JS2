export default class Cuenta {
    constructor(numeroCuenta, saldo = 0) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    consultarSaldo() {
        return this.saldo;
    }

    realizarDeposito(monto) {
        this.saldo += monto;
    }

    realizarRetiro(monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
        } else {
            alert("Saldo insuficiente");
        }
    }
}
