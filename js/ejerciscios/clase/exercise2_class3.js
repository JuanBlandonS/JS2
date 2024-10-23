let studentName ="Juan", valorMatricula = 1000000, estrato = 2

const descuento = 
estrato === 1 ? 0.40 :
estrato === 2 ? 0.30 :
estrato === 3 ? 0.10 :
0; // Por defecto para estratos 4, 5, 6

const recargo = 
estrato === 4 ? 0.10 :
estrato === 5 ? 0.20 :
estrato === 6 ? 0.40 :
0; // Por defecto para estratos 1, 2, 3

const valorDescuento = valorMatricula * descuento;
const valorRecargo = valorMatricula * recargo;
const valorNeto = valorMatricula - valorDescuento + valorRecargo;

// Imprimiendo los resultados
console.log(`Nombre del estudiante: ${studentName}`);
console.log(`Valor de la matrícula: ${valorMatricula}`);
console.log(`Valor del descuento: ${valorDescuento}`);
console.log(`Valor del recargo: ${valorRecargo}`);
console.log(`Valor neto a pagar: ${valorNeto}`);