class Personaje {

    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    mostrarInfo(){
        return `${this.nombre}, ${this.tipo}`;
    }

}


class Movimientos extends Personaje{
    constructor(nombre, tipo, habilidades){
        super(nombre, tipo);
        this.habilidades = habilidades;
    }

    estadoPersonaje(estado){
        if(estado === 'Paralizado'){
            console.log(`${this.nombre} esta paralizado`)
        }else{
            console.log(`${this.nombre} puede utilizar sus movimientos: ${this.habilidades}`);
        }
    }
}



const personaje = new Personaje('Firer', 'Fuego');
const personaje2 = new Movimientos('Pepti', 'Planta', ['Golpe', 'Moridsco', 'Araniazo', 'Latigo']);

personaje2.estadoPersonaje('');

