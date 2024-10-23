
let contador = 0;

do { 
    console.log(`Iteración número: ${contador}`);
    contador++;

} while (contador <= 10);

let num, contPos = 0, contNeg = 0, acumPos = 0 ,acumNeg=0

do {
    num = parseInt(prompt("Digite un numero"))
    if (num > 0) {
        contPos++;
        acumPos += num
    } else{
        contNeg++;
        acumNeg += num
    }
} while (num !== 0);

document.writeln("<hr>")
document.writeln(`Numeros positivos: ${contPos}, acumulario (Suma): ${acumPos}`)
document.writeln("<hr>")
document.writeln(`Numeros negativos ${contNeg}, acumulario (Resta): ${acumNeg}`)
document.writeln("<hr>")

let user= "Paco", useName
do {
    useName = prompt("Ingrese su usuario")
    if (user === useName) {
        console.log("Bienvenido paco")
    } else {
        console.log(`tu no eres paco, eres ${useName}`)
    }
} while (user !== useName);

let genero
do {
    genero = prompt("Ingresa tu genero: 1.Femenino 2.Masculino 3.No binario")
    if (num !== 1 || num !== 2 || num == 3) {
        console.log("Ingresa un genero correcto")
    }
} while (num !== 1 || num !== 2 || num == 3);


