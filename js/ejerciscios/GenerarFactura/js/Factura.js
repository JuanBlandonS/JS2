class Factura{
    constructor(producto,desceunto){
        this.producto = producto;
        this.desceunto = desceunto;
        this.iva = 0.19
    }
    calcularDesceunto(){
        return (this.producto.calcularSubtotal() * this.desceunto) / 100
    }
    calcularIva(){
        return (this.producto.calcularSubtotal() - this.calcularDesceunto()) * this.iva
    }
    calculartotal(){
        return this.producto.calcularSubtotal() - this.calcularDesceunto() + this.calcularIva() 
    }
    generarFactura(){
        return `
        <p><strong>Subtotal----></strong> ${this.producto.calcularSubtotal()}</p>
        <p><strong>Descuento----></strong> ${this.calcularDesceunto()}</p>
        <p><strong>IVA----></strong> ${this.calcularIva()}</p>
        <p><strong>Total----></strong> ${this.calculartotal()}</p>
        `
    }   
}

export default Factura