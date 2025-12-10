
class Personaje {

    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    // Metodo Getter: permite consulta u obtener valores
    //      Buena practica: se coloca GET en el nombre del metodo para indicar que es una consulta

    get getTipo(){
        return this.tipo;
    }

    // Metodo Setter: Permite modiciar valores
    //      Buena practica: se coloca SET en el nombre del metodo par aindicar que es un modificador

    set setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

}

const personaje = new Personaje('Pepti', 'Planta');
// personaje.setNombre = 'Planti';
// console.log(personaje);

if(personaje.getTipo === 'Planta'){
    personaje.setNombre = 'Planti';
}else{
    personaje.setNombre = 'Firer';
}

console.log(personaje);