/** Eventos: son acciones entre el cliente y el servidor que desencadenas procesos.
 * Se puede configurar vents que se ejecuten solo en el servidor y solo en el cliente.
 * Emitters "emisores" (objetos que emiten eventos) nombrados y que llaman a funciones especificas.
 * son instancias de la clase evenEmitter, que contiene un método .on(), la funcion se ejecuta cuando
 * se ejecuta el evento "Event Handler".
 * events (eventos), se usar para definir, emitir y escuchas nuestros propios eventos.
 */

// importamos el modulo EvenEmitter.
const EventEmitter = require('events');
//console.log(EventEmitter); // para ver los eventos de EventEmitter disponibles.

/** Usando evento con EventEmitter */
// instanciamos la clase para EventEmitter para poder trabaja con sus eventos.s
const emisorProductos = new EventEmitter();

/** Ejemplo creando evento "compra" para enviarlo al servidor, se puede definir parametros 
 * dentro de la función flecha (parametros)=>{}, por ejemplo "total".
 */
emisorProductos.on('compra', (totalCompra, numProductos)=>{
    console.log(`Total de la compra: $${totalCompra}`);
    console.log(`Número de productos: ${numProductos}`);
})

// emitimos el evento, si y solo si se crear el evento y se emite, podemos tener parametros.
emisorProductos.emit('compra', 2500, 5);
//emisorProductos.emit('compra');
//emisorProductos.emit('compra');