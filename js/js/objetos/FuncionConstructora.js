function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona("Juan", "Blandon","17")
console.log(persona1);

const persona2 =  new Persona("Diego", "Perez", "25")
console.log(persona2);

Persona.prototype.telefono =  "1234567890";

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `);
}

persona1.saludar();
persona2.saludar();

