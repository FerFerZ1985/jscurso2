/**
 * Scope local o Variables locales
 *      -Son variables declarados dentro de la funcion
 *      -Son accesibles solamente dentro de la funcin
 */
var edad = 31 // Variable Global

const miEdad = (nombre) => {
    var edad = 35; //Variable Local
    console.log(`Mi nombre es: ${nombre} y mi edada es ${edad}`);
}

miEdad('Jorge');
console.log(edad);