/** Promise (JavaScript asincrono), es un objeto que representa el eventual resultado
 * o error de una operación asincrona, ya que el resultado solo se sabra al final de la operacion
 * de esa promesa o promise.
 * Las promesas puede estar en 3 estados:
 * 1ero. pendiente (pending), 
 * 2do. cumplida (fulfilled) o rechazada (rejected).
 * Una promesa es un Objeto de JavaScript. Que esta asociado a 
 * la llamada callback Function (funcion de respuesta o llamada).
 * Un callabck function: se puede definir como una funcion que se pasa a otra funcion como parametro, y 
 * luego se ejecuta dentro de la función externa.
 * Si tenemos la funcion F y H, podemos incluir la F en H como argumento, y luego llamar a F dentro de H,
 * cuando se completa el proceso sincrono en H, se muestra en F el resultado.
 * Los callback function, tiene un método then(); que nos ayudara a decir que hacer cuando se completa
 * la promesa dependiendo de si fue exitosa o ocurrio algun error.
 */

const { promisify } = require("util");

// // Creando una promesa, se deben establece 2 parametros por defecto "resolve" y "reject".
// //const promesaCumplida = true; // creamos un promesa cumplida, esto se puee trabaja con condicionales.
// const promesaCumplida = false; // creamos un promesa cumplida, esto se puee trabaja con condicionales.
// const miPromesa = new Promise((resolve, reject)=>{
//     // simulamos el proceso asincrono con el uso de setTimeout();
//     setTimeout(()=>{
//         if (promesaCumplida) {
//             resolve('¡Promesa cumplida!'); // funcion si es cumplida resolve();
//         }else {
//             reject('¡Promesa rechazada...'); // funcion si no se cumple o se rechaza reject();
//         }
//     }, 3000);
// });
// // se pasa por defecto el "valor" como argunmento, (resolve o reject) según se pase por argumento de la promesa.
// // miPromesa.then((valor)=>{
// //     console.log(valor);
// // });
// /** Ahora manejaremos los resultados que se muestren según es estado (resolve o reject) del callback
//  * ya que con lo anterior no controlamos del todo los mensajes de error, sin embargo nos cumple la funcion.
//  */
// // si la promesa se cumple (resolve)
// const manejarPromesaCumplida = (valor)=>{
//     console.log(valor);
// }
// // si la promesa no se cumple (reject)
// const manejarPromesaRechazada = (razonRechazo)=>{
//     console.log(razonRechazo);
// }
// /** llamando a then() para asociar las funciones. 
//  * de esta forma nos permite controla y mostrar los mensajes de exito o error que configuremos
//  * según sea el estado de la promesa (resolve o reject) en nuestro ejemplo.
//  * manejarPromesaCumplida (resolve) y manejarPromesaRechazada (reject) 
// */
// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

/** ejemplo de restaurante de pizzas */

const estatusPedido = ()=>{
    // // creamos un funcion para que un numero aleatorio maneja la condicion true o false.
    // const estatus = Math.random() < 0.8; // para tener un número aleatorio para generar estatus.
    // console.log(estatus); // para mostrar el estatus según número aleatorio.
    // return estatus; // retornando resultado del estatus.
    // la llamamos de forma resumida a la anterior funcion creada.
    return Math.random() < 0.8; // para tener un número aleatorio para generar estatus.
}
// /** para visualizar los estatus obtenidos. */
// for (let i = 0;i < 10; i++) {
//     console.log(estatusPedido());
// }

// creamos la instancia de la clase Promesa
const miPedidoPizza = new Promise((resolve, reject)=>{
    // simular que es un proceso asincrono con setTimeout();
    setTimeout(()=>{
        if (estatusPedido()) {
            resolve('¡Pedido Exitoso, pizza en camino.');
        }else {
            reject('¡Ocurrio un error! con su pedido.');
        }
    }, 3000);
});
// // 1er. Opcion: Definiendo que ocurre cuando se resolve o reject la promesa del pedido.
// const aceptarPedido = (mensajeAceptarPedido)=>{
//     console.log(mensajeAceptarPedido);
// }
// const rechazarPedido = (mensajeRechazarPedido)=>{
//     console.log(mensajeRechazarPedido);
// }
// // segun estatus de pedido resolve (exitosa) o reject (rechazada)
// miPedidoPizza.then(aceptarPedido, rechazarPedido);

/** 2da. Opcion: Podemos resumir desde definir que ocurre si es resolve o reject */
// miPedidoPizza
//     .then((mensajeAceptarPedido)=>{
//         console.log(mensajeAceptarPedido);
//     })
//     .then(null, (mensajeRechazarPedido)=>{
//         console.log(mensajeRechazarPedido);
//     });

/** 3era. Opcion: De igual forma podemos resumir aun más usando .catch() y nos evitamos el (null,...)
 * catch() solo se ejecutara si hay un rechazo del pedido.
*/
// miPedidoPizza
//     .then((mensajeAceptarPedido)=>{
//         console.log(mensajeAceptarPedido);
//     })
//     .catch((mensajeRechazarPedido)=>{
//         console.log(mensajeRechazarPedido);
//     });

/** 4ta. opcion: en caso de las logoica de las funciones resolve o reject sean más compleja se puede usar.
 */
const aceptarPedido = (mensajeAceptarPedido)=>{
    console.log(mensajeAceptarPedido);
}
const rechazarPedido = (mensajeRechazarPedido)=>{
    console.log(mensajeRechazarPedido);
}
miPedidoPizza.then(aceptarPedido).catch(rechazarPedido);