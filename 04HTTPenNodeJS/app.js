/** Nuevo servidor con más detalles. */
const http = require('http');
const servidor = http.createServer((req, res)=>{
    // /** console.log(req); con esto mostramos todos los
    //  * metodos del objeto createServer para una solicitud del cliente al servidor.*/
    // console.log('===> req (request o solicitud)');
    // console.log(req.url) // mostramos la url
    // console.log(req.method); // metodo o proposito de esa solicitud. (GET, POST, PUT o DELETE)
    // console.log(req.headers); // para solicitar la cabeceras de la solicitud enviada desde el cliente.
    
    /** console.log(res); con esto mostramos todos los 
     * metodos del objeto createServer para una respuesta del servidor al cliente. */ 
    console.log('===> res (response o respuesta)');
    console.log(res.statusCode); // mostramos el status por defecto // 200 (ok)
    // //podemos cambiar el valor de statusCode.
    // res.statusCode = 404; // 404 Not Found
    // console.log(res.statusCode);
    res.end('Hola, mundo...'); // para detener o finalizar la respuesta.
});
    const puerto = 3000;
    servidor.listen(puerto,  ()=>{
    console.log(`El servidor. Estamos escuchando desde http://localhost:${puerto} ... `);
});