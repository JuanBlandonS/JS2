console.log("Hola, aquí estoy");

//Secuenciales
/*Hacer un algoritmo en JS que calcule el área de un triángulo rectángulo sabiendo que su 
altura es de 12.5 metros, su base de 48 metros, formando un ángulo recto*/

const altura = 12.5;
const base = 48;
const area = (altura * base) / 2;

console.log("El área es: " + area + " metros cuadrados");

//Condicionales
const edad = 15;

if(edad >= 18){ 
    console.log("Eres mayor de edad, tienes " + edad + " años");
}else{
    console.log("Eres menor de edad, tienes " + edad + " años");
}

if(edad <= 10){
    console.log("Estas en la niñez");
}else{
    if(edad <= 11 && edad <= 14){
        console.log("Estas en la preadolescencia");
    }else{
        if(edad <= 15 && edad <= 17){
            console.log("Estas en la juventud");
        }else{
            if(edad <= 18){
                console.log("Estas en la adultez");
            }
        }
    }
}

