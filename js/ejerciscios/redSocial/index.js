const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
];
  
const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encanta Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mí me gusta más el café que el té",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
];
  
const username = prompt("¿Cuál es tu usuario?");
const password = prompt("¿Cuál es tu contraseña?");
  
function usuarioExistente(username, password) {
    for (let i = 0; i < usersDatabase.length; i++) {
      if (
        usersDatabase[i].username.toLowerCase() === username.toLowerCase() && // Comparación sin importar mayúsculas
        usersDatabase[i].password === password
      ) {
        return true;
      }
    }
    return false;
}
  
function signIn(username, password) {
    if (usuarioExistente(username, password)) {

        const userTimeline = obtenerTimelineUsuario(username);
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(userTimeline);

    } else {

      alert("¡Uuups, usuario o contraseña incorrectos!");

    }
}

function obtenerTimelineUsuario(username) {
    // Buscar el timeline del usuario en el array usersTimeline
    for (let i = 0; i < usersTimeline.length; i++) {

        if (usersTimeline[i].username.toLowerCase() === username.toLowerCase()) {
            return usersTimeline[i].timeline; // Retorna el timeline si lo encuentra
        }
        
    }
    return "No tienes historial"; // Si no se encuentra el timeline, retornar un mensaje por defecto
}
  
signIn(username, password);
