let age = 18;
let canDrinkAlcohol = (age >= 21) ? 'Yes' : 'No'; // Lo que hace es que mira si es falso o verdadero y imprime eso; 
console.log(canDrinkAlcohol); // Imprime 'No'

const user = 'paco'
let userName = "luis"

if ( user       === userName) {
    console.log(`Hola Bienvenido ${user}`)
} else {
    console.log(`No eres ${user}... tu eres ${userName}`)
}
 
user === userName 
    ? console.log(`Hola Bienvenido ${user}`) 
    : console.log(`No eres ${user}... tu eres ${userName}`);

let password = (user === userName )? console.log(`Hola Bienvenido ${user}`)  : console.log(`No eres ${user}... tu eres ${userName}`);

let nro1 = 5
let nro2 = 10

nro1 === nro2 ? console.log(`Suma ${(nro1 + nro2)}`) : console.log(`Multiplicacion ${(nro1 * nro2)}`)
let result = (nro1 === nro2) ? `Addition ${(nro1 + nro2)}` : `Multiplication ${(nro1 * nro2)}`
console.log(result)
document.writeln(result)

