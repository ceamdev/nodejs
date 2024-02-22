/** Protocolo de transferencia de Hipertexto (HTTP)
 * Transferencia de datos entre cliente-servidor.
 * Forma de comunicación entre el cliente y el servidor.
 * Solicitudes (Requets): 
 * * - Método "HTTP": GET (OBTENER), POST (CREAR), PUT (MODIFICAR), DELETE (ELIMINAR), ENTRE OTROS.
 * * - Camino "path": ruta del archivo o documento solicitado.
 * * - Versión "HTTP": 
 * * - Cabeceras "headers": información sobre la solicitud.
 * * - Cuerpo "body": el contenido a solicitar
 * Respuestas (Response):
 * * - Código de estado: Son importantes al trabajar con servidores, solicitudes o respuestas, 
 * no indican el estado de la petición, si fue exitosa o ocurrio un error, es un número que indica
 * que ha ocurrido con la solicitud, por ej. 1-199 (informativos), 200-299 (respuesta satisfactorias),
 * 300-399 (redirecciones), 400-499 (errores del cliente), 500-599 (errores del servidor), los mas comunes
 * son el 200 (ok), 400 (bad requets), 404 (not found) y 500 (Internal Server Error).
 * * - Texto de estado: 
 * * - Versión HTTP:
 * * - Cabecera "headers":
 * * - Cuerpo "body": 
 * 
 * Módulo HTTP se incluira para el que servidor pueda escuchar nuestras peticiones. Asi podremos crear
 * nuestro primer servidor el NodeJs. Para ellod debe hacer lo siguiente:
 */
// incluimos el módulo http, importandolo.
const http = require('http');
/**
 * Creamos nuestro servidor, haciendo uso del modulo http.
 * Dentro de la funcion flecha tendremos 2 parametros:
 * req (requets) "solicitud http del cliente al servidor"
 * res (response) "respuesta http del servidor al cliente" 
*/
const servidor = http.createServer((req, res)=>{
    // console.log('Solicitud nueva.'); // para visualizar las solicitudes al servidor.
    // escuhando la solicitud, y la respuesta que se le enviara al cliente, con el metodo end(); envia la respuesta.
    res.end('Hola, mundo primer desde la respuesta del servidor a la solicitud del cliente');
});
    // se asigna un puerto para acceder a la app o proceso especifico.
    // 3000 puerto, ()=>{ (que hará el servidor cuando responda.) }
    const puerto = 3000;
    servidor.listen(puerto,  ()=>{
    console.log(`El servidor. Estamos escuchando desde http://localhost:${puerto}`);
});