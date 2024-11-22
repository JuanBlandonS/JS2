setTimeout(()=> 
console.log("Tarea 2"), 2000)

console.log("Tarea 1")

Promise.resolve().then(( )=>
console.log("Microtarea 1"))

console.log("tarea 3")

Promise.resolve().then(( )=>
console.log("Microtarea 2"))