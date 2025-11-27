// Una funcion en JS es un bloque de codigo reutilizable que realiza una tarea especifica, te permite dividir tu codigo en pequenias partes manejables, haciendo que sea mas facil de entender, mantener y depurar ademas promueven la reutilizacion del codigo.
// Como invocar una funcion saludar() - Esto imprimira HOLA MUNDO en la consola
// Buenas praticas que es NOMBRES DESCRIPTIVOS (para describir la funcion de manera clara para sber que hace esa funcion), FUNCIONES PEQUENIAS (que sean bloques de codigo pequenias y enfocadas en una sola tarea), REUTILIZACION (reutilizar codigo, para eso considerar colocar dentro de una funcion para q sea mas eficiente)

//1# Forma - Declarando la funcion
function saludo () {
    console.log('Hola Mundo!');
}
// Ahora la llamamos a la funcion, osea el nombre designado de esta manera
saludo();

//2# Forma - Asignando funcion a una variable
const holaMundo = function(){
    console.log('Asignando variable');
}

holaMundo ();

//3# Forma - Funciones de tipo flecha
// const miFuncion = () => console.log('Funcion tipo flecha'); - cuando hay una sola linea de codigo
// const miFuncion = () => {
//     console.log('Funcion tipo flecha');
// } - cuadno hay varias lienas de codigo

miFuncion();

