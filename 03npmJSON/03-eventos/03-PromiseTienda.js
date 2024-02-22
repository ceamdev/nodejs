/** Encadenar Promesas (Promise) y la sintaxis "async & await" (asincrono en espera) */
function ordenarProducto (producto){
    //  retornamos promesa dentro de la función para crear funcion asincrona.
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando producto: ${producto} de Tienda CEAMDEV`);
        // simulamos proceso asincrono con setTimeout();
        setTimeout(() => {
            // creamos condicionales y respuestas segun estado.
            if (producto === "taza") {
                resolve('Se estan ordenando la taza por color');
            }else {
                reject('No se encontro producto.');
            }
        }, 2000);
    });
}
function procesarPedido(respuesta){
    //return new Promise((resolve, reject)=>{ // se puede omitir reject ya que no se esta llamando.
    return new Promise(resolve =>{
        console.log('Se esta procesando la respuesta...');
        console.log(`La Respuesta es: "${respuesta}"`);
        setTimeout(()=>{
            resolve('Pedido procesado correctamente. Gracias por tu compra.');
        }, 4000);
    });
}

/** llamamos a la funcion ordenaProducto() y ordenamos el producto primero, para luego 
 * obtener la respuesta para que luego se ejecute el procesarPedido*/
// ordenarProducto('tasa') // si no se encuentra producto
// ordenarProducto('taza') // si se encuentra el producto.
//     .then(respuesta =>{
//         console.log('Respuesta recibida.');
//         console.log(respuesta);
//         // si se cumple el .then se llamada a la funcion procesarPedido(), ambos son asincronos.
//         return procesarPedido(respuesta);
//     }) // ahora si podemos encandenar las promesas.
//     .then(respuestaProcesada =>{
//         console.log(respuestaProcesada);
//     }) // en caso de que ocurra un error realizamos una llamada a catch().
//     .catch(error => {
//         console.log(error);
//     });

    /** Haciendo uso de "async" y "await" para organizar las respuestas sincronas y asincrnas.
     * y que se pueda tener control de la ejecución del script según el orden que nosotros establecemos
     * para el mismo.
     */
    async function realizarPedido(producto){
        try {
            const respuesta = await ordenarProducto(producto);
            console.log('Respuesta recibida.')
            console.log(respuesta);
            const respuestaProcesada = await procesarPedido(respuesta);
            console.log(respuestaProcesada);
        } catch (error) {
            console.log(error);
        }
    }
    realizarPedido('taza');