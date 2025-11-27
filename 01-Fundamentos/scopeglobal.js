/**
        Scope Global o Variables Globales
            -Son variables declaradas fuera de las funciones
            -Son accesibles desde cualqueir parte del codigo
 */

var nombre = 'Fernando';

const miFuncion = () => {
    nombre = 'Jose';
    console.log('Mi nombre es: ' + nombre);

}

miFuncion();