
class Personaje {
    static vida = 5200;

    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    
    static eliminar(id){
        console.log(`El personaje con el ${id} fue eliminado`);
    }
}

const personaje = new Personaje('Pepti', 'Planta');

console.log(Personaje.vida);

