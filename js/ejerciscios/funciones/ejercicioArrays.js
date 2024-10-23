function Factura(){
    let nombre, precio, cantidad
    nombre = "Lece"
    precio = 5000
    cantidad = 20

    let producto = [nombre, precio, cantidad]

    return producto
}

function Subtotal(Factura){
    return Factura[1]*Factura[2]
}
function Descuento(subtotal, descuento){
    return subtotal * descuento
}

let arrayFactura = Factura()
let subtotal = Subtotal(arrayFactura)
let vlrDescuento = Descuento(subtotal, 0.15)


console.log("")
console.log(subtotal)