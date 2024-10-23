
let contador = 0;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

let num = parseInt(prompt("Digite un numero")), contPos = 0, contNeg = 0, acumPos = 0 ,acumNeg=0
while (num !== 0) {
    if (num > 0) {
        contPos++;
        acumPos += num
    } else{
        contNeg++;
        acumNeg += num
    }
    num = parseInt(prompt("Digite un numero"))
}

document.writeln("<hr>")
document.writeln(`Numeros positivos: ${contPos}, acumulario (Suma): ${acumPos}`)
document.writeln("<hr>")
document.writeln(`Numeros negativos ${contNeg}, acumulario (Resta): ${acumNeg}`)
document.writeln("<hr>")