export default class Cliente {
    constructor(nombre, apellido, direccion, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.id = id;
        this.cuenta = null;
    }

    asignarCuenta(cuenta) {
        this.cuenta = cuenta;
    }
}
