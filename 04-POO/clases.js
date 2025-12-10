// Clases = Son plantillas que se utilizan para crear objetos

class Personaje {

    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    mostrarInfo(){
        return `${this.nombre}, ${this.tipo}`;
    }

}

//CREAR ELOBJETO
const persnoaje1 = new Personaje('Pepti', 'Planta');
const persnoaje2 = new Personaje('Runko', 'Agua');
const persnoaje3 = new Personaje('Firer', 'Fuego');

// console.log(persnoaje1);
// console.log(persnoaje2);
// console.log(persnoaje3);

console.log(persnoaje2.mostrarInfo());