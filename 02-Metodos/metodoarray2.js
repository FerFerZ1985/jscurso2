// const frutas = ['Manzana', 'Naranja', 'Pera', 'Fresa', 'Kiwi', 'Melon', 'Banana'];

// .push() - agregar un elemeto afl final de un arreglo
// frutas.push('Fresa');

// console.log(frutas);

// .unshift() - agrega un elemento al incio

// frutas.unshift('Fresa')
// console.log(frutas);

// .pop() - elimina el ultimo elemento de un arreglo

// frutas.pop();
// console.log(frutas);

//.shift() = elimina el primer elemento y puede guardar en una variable el elemento eliminado

// const elementoEliminado = frutas.shift();

// console.log(elementoEliminado);
// console.log(frutas);

// .splice() - permite agregar elemento a un arreglo en la posicion que especique
//      -1 Parametro: posicion en donde queremos comenzar a insertar elementos
//      -2 Parametro: si queremos eliminar elementos y cuantos queremos eliminar

// frutas.splice(0, 1);
// console.log(frutas);

// .slice() - permite copiar una parte del arreglo a otro
//      -1 parametro: posicion en donde queremos copiar
//      -2 parametro: limite que queremos copiar

// const frutasfav = frutas.slice(2, 6)
// console.log(frutasfav);

// .concat() - juntar dos arreglos en uno

const frutas = ['Manzana', 'Naranja', 'Limon', 'Melon', 'Kiwi', 'Banana'];
// const frutas2 = ['Melon', 'Kiwi', 'Banana'];

// const arrayTotal = frutas.concat(frutas2);

// console.log(arrayTotal);

// .includes - Nos permite sabersi el arreglo contiene un elemento especificado

console.log(frutas.includes('Pinia'))