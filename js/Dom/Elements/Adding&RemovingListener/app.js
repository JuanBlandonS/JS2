const container = document.querySelector(".container")

const boton = document.querySelector("button")

container.addEventListener("mouseover", () => {
    container.style.backgroundColor = "blue"
})

container.addEventListener("mouseout", () => {
    container.style.backgroundColor = "red"
})

// boton.addEventListener("click", () => {
//     alert("botton clicked")
// })

const bottonclickCallback = () => {
    alert("Botton clicked")
}

boton.addEventListener("click", bottonclickCallback)

setTimeout(() => {
    boton.removeEventListener("click", bottonclickCallback)
}, 2000);