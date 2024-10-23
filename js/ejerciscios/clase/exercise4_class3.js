let studentName = "Juan", edad = 17, gender= "female", strato = 2, schooling = prompt("Ingresa que nivel de estudio tienes: 1. high school, 2. universidad")

let beca = (edad >= 16 && strato == 2 && schooling == 1 && gender == "female") ? "Tienes derecho a una beca" : "No tienes derecho a una beca"
console.log(beca)