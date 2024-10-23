

const numeroSecreto = Math.floor(Math.random()* 10 + 1);
let numeroJugador, intentos=0;


do {
    numeroJugador = parseInt(prompt("Adivina el numero secreto entre 1 - 10"))

    if (numeroJugador === numeroSecreto) {
        console.log("Adivinasates el numero secreto");
    } else if (numeroJugador < numeroSecreto){
    console.log("El numero es demasiado bajo");
    } else {
        console.log("El numero es muy alto, intenta denuevo");
    }
    intentos++;

} while (numeroSecreto !== numeroJugador);

console.log(`Intentos: ${intentos}`)