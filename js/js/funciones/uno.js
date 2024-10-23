function Saludar(){
    console.log("Hola ");
}
function SaludarName(nameStudent, grade){
    console.log(`Hola ${nameStudent}, nota: ${grade}`);   
}
let nombre ="roberto", grade = 5.0
Saludar();
SaludarName("Luis",3);
SaludarName("Sandra", 3);
SaludarName(nombre, grade);
nombre = "Diego" , grade= 4.9
SaludarName(nombre, grade);

function PorDefecto(nameStudent, shitf , subject = "javascript"){
    gender = "Masculino"
    console.log(`Estudiante ${nameStudent}\nJornada ${shitf}\nAsignatura ${subject}\nGenero ${gender} `)
}

PorDefecto()
PorDefecto("Diego", "Noche")


function Sumar(num1, num2){ 
    let suma = num1 + num2
    return suma
}
Sumar(1,2)
console.log(`La suma es: ${Sumar(8,100)} `)

function SumarOtros(numer1, number2){
return numer1 + number2
}
console.log(`La suma reducida es: ${SumarOtros(8,100)} `)


// function Calculadora(){
//     ingre= parseInt(prompt("Desea ingresar a la calculadora:\1.Si\n2.no"))
//     if (ingre == 2) {
//         break;
//     }
//     num1 = parseInt(prompt("ingrese el numero 1:"))
//     num2 = parseInt(prompt("ingrese el numero 2:"));
//     operador = prompt("Ingrese el operador (+,-,*,/)");
//     switch(operador){
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if(num2!=0){
//                 return num1 / num2;
//             }else{
//                 return "Error, no se puede dividir por cero";
//             }
//         default:
//             return "Error, operador no válido";
//     }
// }

// console.log(`El resultado de la operacion es: ${Calculadora(1,2,'*')}`);

function Calculadora() {
    let ingre = parseInt(prompt("Desea ingresar a la calculadora:\n1. Si\n2. No"));
    
    while (ingre === 1) {
        let num1 = parseInt(prompt("Ingrese el número 1:"));
        let num2 = parseInt(prompt("Ingrese el número 2:"));
        let operador = prompt("Ingrese el operador (+, -, *, /)");

        let resultado; 
        switch(operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = "Error, no se puede dividir por cero";
                }
                break;
            default:
                resultado = "Error, operador no válido";
        }

        alert("El resultado es: " + resultado); 

        ingre = parseInt(prompt("Desea ingresar otra operación:\n1. Si\n2. No"));
    }
}

Calculadora();


function Nota(nota1, nota2, nota3){
    return (nota1+nota2+nota3) / 3
}

function Observacion(nota){
    let mensaje
    if (nota >= 3) {
        mensaje = "Gano"
    } else {
        mensaje = "Perdio"
    }
    return mensaje
}
let     nota = Nota(4,5,5) 
console.log(Observacion(nota))
