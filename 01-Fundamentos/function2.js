/**PARAMETROS DE FUNCIONES
 *      -Parametros: Valores especificos en la funcion 
 *      -Argumentos: Valores que enviamos a la funcion al invocarla
 */

const saludo = ( nombre ) /**Parametros */ => {
    console.log(`Hola Mundo, mi nombre es: ${nombre}`);
}

saludo('Jorge'); /*Argumentos**/

//Multiples parametros
const calculadora = (num1, num2, num3) => {
    console.log(num1 + num2 + num3);
}

calculadora(20, 10, 30);