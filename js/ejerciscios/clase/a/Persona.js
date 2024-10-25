class Persona{
    constructor(identificador,apellido,nombre,edad,genero){
        this.identificador = identificador 
        // cuando se utiliza this. estamos diceindo que este parametro es de la calse es decir las propiedades
        this.apellido = apellido
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }

    //Metodos
    imprimirDatos(){
        console.log(`Identificacion ${this.identificador}`)
        console.log(`Apellido ${this.apellido}`)
        console.log(`Nombre ${this.nombre}`)
        console.log(`Edad ${this.edad}`)
        console.log(`Genero ${this.genero}`)
    }

    actualizarDatos({ apellido, nombre, edad, genero }) {
        if (apellido) this.apellido = apellido;
        if (nombre) this.nombre = nombre;
        if (edad) this.edad = edad;
        if (genero) this.genero = genero;
    }
}


class EquipoTecnologico{
    constructor(idEquipo,nombre,descripcion,precio){
        this.idEquipo = idEquipo
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
    }

    imprimirDatos(){
        console.log(`Id del equipo ${this.idEquipo}`)
        console.log(`Nombre del equipo ${this.nombre}`)
        console.log(`Descripcion del equipo ${this.descripcion}`)
        console.log(`Precio del equipo  $${this.precio}\n`)
    }
}
export {Persona,EquipoTecnologico}