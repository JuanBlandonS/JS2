let product;
let quantity, subtotal, price,  neto, discount_value,fee_value;
const discount = 0.07;
const fee = 0.19;

console.log("┌­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─┐");
console.log("│          Factura de venta        │");
console.log("├­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─┤­");
console.log("│  Blandon Sepulveda Juan Esteban  │");
console.log("└──────────────────────────────────┘");

product = prompt("Ingresa el producto: ");
price = parseInt(prompt("Ingressa el costo del producto: "));
quantity = parseInt(prompt("Ingresa la cantidad: "));

subtotal = price * quantity;
discount_value = subtotal * discount;
fee_value =  (subtotal - discount_value) * fee;
neto= subtotal - discount_value + fee_value;

console.log(`\t Producto ----> ${product}`)
console.log(`\t Precio ----> ${price}`)
console.log(`\t Cantidad ---> ${ quantity}`)
console.log(`\t Subtotal ---> ${subtotal}`)
console.log(`\t Vlr descuento ---> ${discount_value}`)
console.log(`\t Vlr iva ---> ${fee_value}`)
console.log(`\t Total ---> ${neto}`)




