const miTexto = document.getElementById("texto")
const miBoton = document.getElementById("miBoton")

// crear tres funciones, para un click doble click y click derecho

function unClick () {
    miTexto.textContent = "Haz echo un click ✌️"
}

function dobleClick() {
    miTexto.textContent = "Haz realizado dos  clicks ✌️✌️"

}

function clickDerecho(){
    miTexto.textContent = "Haz realizado un click derecho 👌"
}


// Capturar los eventos para llamar la funcion

document.getElementById("miBoton").addEventListener('click', function (){
    unClick()
})

document.getElementById("miBoton").addEventListener('dblclick', function (){
    dobleClick()
})

// Agregar un evento para el click derecho
document.getElementById("miBoton").addEventListener('contextmenu', function (e){
    e.preventDefault()
    clickDerecho()
})