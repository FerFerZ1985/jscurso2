const texto = 'Hola mundo!';

// .length - Porpiedad que devuelve el numero de caracteres de una cadena de texto

// console.log(texto.length);

// .indexOf() y .lastIndexOf() - Devuelve el index del primer y utlimo caracter

// console.log(texto.indexOf('o'));
// console.log(texto.lastIndexOf('o'));

// .slice() Devuelve un fragmento de una cadena de textos. No modifica el elemento sino que crea un neuvo elementos
    // 1 - Parametro, index donde indica el corte
    // 2 - Parametros (opcional) index donde termina el corte

// console.log(texto.slice(0, 10));

// .replace() - Devuelve una cadena de texto en donde reemplace un valor por otro
    // 1 - Parametro, texto que se quiere reemplazar
    // 2 - Parametro, texto que se quiere colocar
// console.log(texto.replace('mundo', 'Programadores'));

// .replaceALL() - Devuelve una cadena de texto en donde reemplace un valor por otro
    // 1 - Parametro, texto que se quiere reemplazar
    // 2 - Parametro, texto que se quiere colocar

// const frase = 'Creo que mi perro es mas lindo que tu gato';
// console.log(frase.replaceAll('perro', 'gato'));

// repeat.() - Repite un valor la cantidad de veces especificado

// const animo = 'Feliz';
// console.log(`Me siento  ${animo.repeat(2)}`);

// .split() - Convierte una cadena de texto en un arreglo, debemos especificar donde corta cada elemento
    // 1 - Parametro, caracter que funcionara como separador 
    
// console.log(texto.split(' '));

// .toUppercase() y .toLowerCase() = Devuelve cadena de texto en mayusculas o minuscula

// console.log(texto.toLocaleLowerCase());

// .concat() - Concatena dos cadenas de texto
    // 1 Parametro, la separacion de la cadena
    // 2 Parametro, la segunda cadena a concatenar

const valor1 = 'Hola';
const valor2 = 'Mundo!';
console.log(valor1.concat(' ', valor2));