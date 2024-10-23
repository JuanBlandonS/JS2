let nombres = ['Hugo','Juan','Pepe','Luis']

console.log(nombres)

console.log(nombres[1])

// Agrega un nombre uotro elemento al final de  array
nombres.push('Sandra','Esteban')
console.log(`Ultimo: ${nombres[nombres.length - 1]} Penultimo: ${nombres[nombres.length-2]}`)

// Elimina el ultimo elemento del array
nombres.pop()
console.log(`Ultimo: ${nombres[nombres.length - 1]} Penultimo: ${nombres[nombres.length-2]}`)

// Agrega un elemento al principio del array
nombres.unshift('carlos')
console.log(`Primero: ${nombres[0]}`)

// Aqui cambian por que lo agrego y despues lo elimino baaa

// Eliminar el primer elemento
nombres.shift()
console.log(`Primero: ${nombres[0]}`)


let num = nombres.indexOf('pepe')

if (num === -1) {
    console.log("No existe o esta mal dijitado 😒😒")
}else{
    console.log(`Pepe esta en la posicion: ${nombres.indexOf('Pepe')}`)
}
console.log("")
console.log(nombres)

// ordenar un vector
let vectorOrdenado = nombres.sort()
console.log(vectorOrdenado)
// Ordenamiento al revez z a A
let vectorAlRevez = nombres.reverse()
console.log(vectorAlRevez)

// eliminar un elento
nombres.splice(3,1)
console.log(nombres)




