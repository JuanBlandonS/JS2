class Producto {
    constructor(producto,cantidad,precio){

        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    calcularSubtotal(){
        return this.cantidad * this.precio;
    }
}

export default Producto;