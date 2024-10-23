import { Persona, EquipoTecnologico } from './Persona.js';

const persona = new Persona(12312, "Perez", "Juan", 25, "Hombre");
persona.imprimirDatos();

console.log("")

persona.actualizarDatos({ nombre: 'Carlos', edad: 31 });
persona.imprimirDatos();
console.log("")

const computador = new EquipoTecnologico(1212, "hp",  "probook", 1000);
computador.imprimirDatos();

