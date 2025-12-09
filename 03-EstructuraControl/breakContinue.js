// Break - La sentencia break nos sirve para salir de bloques
// Continue - La sentencia Continue nos sirve para saltar a la siguiente iteracion
// const lenguajesPro = ['javascript', 'PHP', 'Python', 'HTML', 'C++', 'Java']
// for(let i = 0; i < lenguajesPro.length; i++){
//     if(lenguajesPro[i] === 'HTML'){
//         console.log('Se detuvo el ciclo, porque HTML no es un lenguaje de programacion');
//         break;
//     }

//     console.log(lenguajesPro[i]);
// }

const lenguajesPro = ['javascript', 'PHP', 'Python', 'HTML', 'C++', 'Java']
for(let i = 0; i < lenguajesPro.length; i++){
    if(lenguajesPro[i] === 'HTML'){
        //console.log('Se detuvo el ciclo, porque HTML no es un lenguaje de programacion');
        continue;
    }

    console.log(lenguajesPro[i]);
}