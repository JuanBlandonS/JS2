let peso = parseFloat(prompt("type in your weight")), altura = parseFloat(prompt("type in your heigt"))

let imc = peso / (altura *2)

let restult = (imc < 16) ? console.log(`Criterio de ingreso al ospital imc: ${imc}`): 
          (imc >= 16 && imc < 17) ? console.log(`infrapeso, imc: ${imc}`):
          (imc >= 17 && imc < 18) ? console.log(`Bajo peso, imc: ${imc}`):
          (imc >= 18 && imc < 25) ? console.log(`Peso normal, imc ${imc}`):
          (imc >= 25 && imc < 30) ? console.log(`sobrepeso (obesidad de grado 1), imc ${imc}`):
          (imc >= 30 && imc < 35) ? console.log(`Sobrepeso cronico (obesidad de grado 2), imc ${imc}`):
          (imc >= 35 && imc < 40) ? console.log(`obesidad premorbida (grado 3), imc ${imc}`):
          (imc >= 40) ? console.log(`Obesidad morbida (grado 4), imc ${imc}`): console.log(`Error, ingrese bien los datos`)

console.log(`End`);