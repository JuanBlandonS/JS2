import Producto from "../js/Producto.js";
import Factura from "../js/Factura.js";

document.getElementById('facturaForm').addEventListener('submit',function (event){
    event.preventDefault();


// Capturar los valores del formulario dentro de una constante 
        
const nombreProducto = document.getElementById('producto').value
const cantidad = parseFloat(document.getElementById('cantidad').value)
const precio = parseFloat(document.getElementById('precio').value)
const descuento = parseFloat(document.getElementById('descuento').value || 0)

// Crear el objeto producto
const producto  = new Producto(nombreProducto, cantidad, precio)

// crear el objeto factura
const factura = new Factura(producto,descuento)

document.getElementById('resultado').innerHTML = factura.generarFactura();

})