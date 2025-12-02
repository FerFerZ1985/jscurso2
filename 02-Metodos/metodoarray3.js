const frutas = ['Manzana', 'Naranja', 'Limon', 'Melon', 'Kiwi', 'Banana', 'Uva', 'Pinia', 'Durazno', 45];

// .forEach() - Permite recorrer un arreglo y ejecutar una funcion por cada elemento

// frutas.forEach((fruta, index) => {
//     console.log(`Nombre: ${fruta}, Posicion: ${index}`);
// });

// .find() - Permite recorrer un arreglo y retonar el primer elemento
 
// const primerNombre =frutas.find((fruta) => {
//     return fruta;
// });

// console.log(primerNombre);

// .map() - Permite recorrer un arreglo, ejecutar una funcion por cada elemento y crear un nuevo arreglo
// const array = frutas.map((fruta) => {
//     if(fruta.length === 5){
//         return fruta;
//     }
// });

// console.log(array);

// // .filter() - Permite recorrer un arreglo, ejecutar una funcion por cada elemento y crear un nuevo arreglo
// const array2 = frutas.filter((fruta) => {
//     if(fruta.length === 5){
//         return fruta;
//     }
// });
// console.log(array2);

// .every() y .some()
//      every() ejecutar un condicional sobre cada elemento. Devuelve true si todos los elemento cumplen la condicion
const verificar = frutas.every((fruta) => {
    if(typeof fruta === 'number'){
        return true;
    }else{
        return false
    }
})
console.log(verificar);

//      some() ejecutar un condicional sobre cada elemento. Devuelve true si algun elemento cumple la condicion
const verificar2 = frutas.some((fruta) => {
    if(typeof fruta === 'number'){
        return true;
    }else{
        return false
    }
})
console.log(verificar2);
