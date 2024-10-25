const discount1 = 0.25
const discount2 = 0.05
let nameProduct = 0, quantity =0
let price = 0, subtotal = 0, discount = 0, total = 0, ingresar, discount25 = 0, discount5= 0, neto = 0, sum, sumSubtotal = 0, sumDiscount = 0



ingresar = prompt("Desea ingresar: 1.Si 2.No")
while (ingresar == 1){
    nameProduct = prompt("Ingrese el nombre del producto")
    quantity = parseInt(prompt("Ingrese la cantidad de productos que se van a llevar"))
    price = parseInt(prompt("Ingrese el costo de cada uno"))

    subtotal = quantity * price
    sumSubtotal += subtotal
    if (quantity > 10) {
        discount = subtotal * discount1
        sumDiscount += discount
        total = subtotal - discount 
        discount25++
    } else {
        discount = subtotal * discount2
        sumDiscount += discount
        total = subtotal -discount
        discount5++
    }
    neto += total

    document.writeln("<hr>")
    document.writeln(`Factura de venta `)
    document.writeln("<hr>")
    document.writeln(`Producto: ${nameProduct}<br>`)
    document.writeln(`Precio: ${price}<br>`)
    document.writeln(`Cantidad: ${quantity}`)
    document.writeln("<hr>")
    document.writeln(`Subtotal: ${subtotal}<br>`)
    document.writeln(`Descuento: ${discount}<br>`)
    document.writeln(`Total: ${total}`)
    document.writeln("<hr>")
    ingresar = prompt("Desea ingresar: 1.Si 2.No")

}
document.writeln(`productos con el 25% de descuento: ${discount25}`)
document.writeln(`productos con el 5% de descuento: ${discount5}`)
document.writeln(`subtotal sumado: ${sumSubtotal}`)
document.writeln(`subtotal descuentos: ${sumDiscount}`)
document.writeln(`neto: ${neto}`)





