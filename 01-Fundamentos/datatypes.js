/** 
    string cadena de texto
    number numeros
    boolean valores verdaderos o falso
    object objeto
    function funciones
    null valor vacio
    undefined valor sin definir
*/

// ? Cadena de texto
// Se trabaja con '' o ""
const nombre = 'Jorge';
const texto = "Frase de mi texto";


// ? Number
// Trabaja con numeros enteros, negativos y decimales

const numero = 4;
const numero2 = -4.239;

// ? Boolean
// Permite valores de verdadero o falso

const preguntaUsuario = false;
const comprobacion = 2 > 5; 



// ? Array o Arreglo
// Permite almacenar multiple valores no necesariamente tiene que ser de un unico tipo

const miArreglo = ['jorge', 200, 'Pedro', 'Juan']; //los corchetes ya identifica java que es un array
// console.log(miArreglo[0]);
// ['Texto', 0, true];
const frutas = [];
frutas [0] = 'Manzana';
frutas [1] = 'Durazno';
frutas [2] = 'Fresa';
// console.log (frutas);


// ? Object
// Permite guardar informacion en parejas de clave - valor o propiedad - valor. se tuilizan {}

const persona = {
    nombre: 'Jorge',
    edad: 35,
    puesto: 'Frontend Developer',
    preferencias: {
        colorFav: 'Azul',
        comidaFav: 'Pizza'
    }
}

//console.log(persona.preferencias.colorFav);
// console.log(persona['edad']);

// Creear un elemento al object
persona.pais = 'Argentina';
// console.log(persona);

// ? function
// Bloques de codigo que se puede reutilizar, permite ejecutar codigo cuadno yo decida

const miFuncion = function saludo(){
    // console.log('Hola mundo');
}

// ? NULL
// Se utiliza cuando se especifica un valor vacio, se puede utilizar para reinciar el valor de una variable

let miNumero = null;
// console.log(miNumero);

// ? UNDEFINED
// Se utiliza para indicar que el valor no esta definido. No se deberia utilizar, lo especifica javascript cuando una variable no tiene valor

var variable; 
// console.log(variable);

// TYPEOF
const miNOmbre = 'Jorge';
console.log(typeof miNOmbre);