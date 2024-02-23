/** Trabajo con ROUTING */
// iniciamos un servidor.
const http = require('http'); // se exportar http para realizar peticiones http.
//const cursos = require('./cursos'); // se exporta desde archivo cursos.js.
const { infoCursos } = require('./cursos'); // se puede usar destucturacion para llamar directamente al objeto de archivo cursos.js.

//creamos nuestros servidor,
const servidor = http.createServer((req, res)=>{
    // implementamos que ocurrira al realizar un solicitud.
    //const {method} = req; // extraemos el metodo de las solicitudes (destruccturacion en javascript)
    const metodo = req.method; // se puede establece una constante metodo para almacenar el method
    // implementamos el routing con switch o condicionales.
    switch(metodo) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default: 
            res.statusCode = 501;
            res.end(`El metodo no puede ser manejado por el servidor y el metodo es ${metodo}`);
    }
});

// llamanos a la funcion para manejarSolicitudesGET.
function manejarSolicitudGET(req, res){
    // definimos el camino o path.
    const camino = req.url; 
    console.log(res.statusCode); // por defecto se asigan 200 por eso se puede comentar en las respues dentro de las condicionales.
    // implementamos el condicional para el routing de la respuesta.
    if (camino === '/') {
        // Para configurar las cabeceras de las solicitudes, estableciendo cabeceras para información adicional.
        res.writeHead(200, {'Content-Type' : 'application/json'})

        // establezco codigo de estado.
        //res.statusCode = 200;  // por defecto se asigna 200 no es necesario llamarlo cada vez.

        // Envio respuesta del servidor, en este caso una cadena de caracteres.
        return res.end('Bienvenido a mi primer servidor y APi, creado con NodeJS.');
    } 
    // si quiero acceder solo a el path del (objeto cursos).
    else if (camino === '/cursos') {
        // establezcoo codigo de estado.
        //res.statusCode = 200; // por defecto se asigna 200 no es necesario llamarlo cada vez.

        // envio respuesta del servidor en este caso, un JSON leido desde cursos.js para mostrar toda la informacion de objeto infoCursos.
        //return res.end(JSON.stringify(cursos.infoCursos)); // sin destructuracion de javascript.
        return res.end(JSON.stringify(infoCursos)); // con destructuracion de javascript
    }
    // si quiero acceder a una propiedad del objeto cursos especifica en este caso (objeto programacion)
    else if (camino == '/cursos/programacion') {
        // establezco codigo de estado.
        //res.statusCode = 200; // por defecto se asigna 200 no es necesario llamarlo cada vez.

        // envio respues del servidor, JSON leido desde cursos.js, mostrar información cursos (objeto programacion)
        //return res.end(JSON.stringify(cursos.infoCursos.programacion)); // sin destructuracion de javascript.
        return res.end(JSON.stringify(infoCursos.programacion)); // con destructuracion de javascript
    }
    // si no ingresa a una ruta o path existente podemos cambiar estatus de solicitud.
    res.statusCode = 404; // recurso no encontrado.
    res.end('El recurso solicitado no existe en GET.');
}


// llamamos a la funcion para manejarSolicitudesPOST
function manejarSolicitudPOST(req, res) {
    // establezco el camino o path.
    const path = req.url;
    // creo el routing al cursos/programacion con metodo POST
    if (path === '/cursos/programacion') {

    // para insertar datos al objeto cursos.js.
    let cuerpo = ' '; // asignamos el contenido del objeto.
    
    // llamamos al evento on(data) para definir que ocurrira cuando el req, reciba informacion mediante POST.
    req.on('data', contenido => {
        cuerpo += contenido.toString();
    });

    // llamamos al evento on(end) para definir que ocurrira cuando el req,
    req.on('end', ()=>{
        console.log(cuerpo); // mostramos que datos incluye cuenpo luego de la respuesta.
        console.log(typeof cuerpo); // mostramos el tipo de dato
        
        // convertirmos esa cadena de caracteres (string) en un objeto usando JSON.parse()
        cuerpo = JSON.parce(cuerpo); // de string a objeto.
        // evaluamos si se paso a un objeto.
        console.log(typeof cuerpo); // mostramos tipo de dato.


        res.end('Se recibio un solicitud POST para /cursos/programacion'); // mostramos la respuesta del servidor.
    });
    //res.statusCode = 200;  // por defecto se asigna 200 no es necesario llamarlo cada vez.
    //return res.end('Se recibio un solicitud POST para /cursos/programacion');
}}

// defino el puerto.
const PUERTO = 3000;

// escucho el puerto para iniciar servidor.
servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`);
})
