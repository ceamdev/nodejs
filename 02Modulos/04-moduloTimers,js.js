/** Modulo Timers o temporizadores, para uso en simular operaciones asincronas 
 * setTimeout() // se ejecuta en x cantidad milisegundos.
 * * setTimeout(funcion, tiempoRetraso, argumentos, argumento2)
 * setImmediate()
 * setInterval()s
*/

/** setTimeout() */
// function mostrarTema(tema) {
//     console.log(`Estoy aprendiendo ${tema}`);
// }
// mostrarTema("Node.js"); // sin retraso.
// setTimeout(mostrarTema,5000,"Python"); // con retraso usando setTimeout();

// function sumar(num1, num2){
//     console.log(num1 + num2);
// }
// setTimeout(sumar,5000,5,6); // otro ejemplo con 2 argumentos o más...

// /** setImmediate() see ejecuta luego de que todo el script sincrono se ejecuta. */
// function mostrarTema(tema) {
//   console.log(`Estoy aprendiendo ${tema}`);
// }
// console.log('Antes del setImmediate()');
// setImmediate(mostrarTema,'Node.JS');
// console.log('Despúes del setImmediate()');

// /** setInterval() */
// function mostrarTema(tema) {
//   console.log(`Estoy aprendiendo ${tema}`);
// }
// setInterval(mostrarTema,3000,'HTML'); // con un solso argumento.
// function sumar(a,b){
//     console.log(a+b);
// }
// setInterval(sumar, 1500, 3, 7); // con más de 1 argumento. 

