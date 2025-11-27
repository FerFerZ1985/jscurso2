/**Operadores logicos
 *      && And -Se tienen que aplicar las dos condicinoes
 *      || Or - Se aplica una de las dos condiciones
 *       | Not -
 *      ?? Nullish Coolescing - NUevo operador, mejora del operador OR
 */

const edad = 18;
const acceso = true;


// AND &&
const comprobacion = edad >= 18 && acceso
                                ? 'Puede accesder' 
                                : 'No puede acceder';

//OR ||
const comprobacion2 = edad >= 18 || acceso
                                ? 'Puede accesder' 
                                : 'No puede acceder';

//NOT !
const variable = true
// console.log(!variable);

//NULLISH ??
const comprobacion3 = 0 ?? 10;


console.log (comprobacion3);

