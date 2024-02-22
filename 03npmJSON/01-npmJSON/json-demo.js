/** Creando Paquete con npm en Nodejs
 * Creamos caperta para crear nuestor package.json  
 * Desde el teminal entramos a nuestra carpeta y escribimos "npm init" (ej: mi-paquete) para agregar los detalles
 * del paquete creado, tambien podemos escribir "npm init --yes" para crear el package.json con
 * los valores por defecto (ej: mi-paquete2).
 * // Trabajando con JSON.
*/

const { info } = require("console")

// // importamos el curso.json
// const curso  = require('./curso.json');
// console.log(curso); // mostramos datos del json
// console.log(typeof(curso)); // identificamos que tipo de datos importamos.
// console.log(curso.temas); // podemos llamar a cada clave y su valor desde acá.

/** Crearemos un objeto desde el mismo archivo usando Javascript */
let infoCurso = {
    "titulo" : "Aprendendo JSON",
    "numVistas" : 21350,
    "numLikes" : 10453,
    "temas" : [
        "JavaScript",
        "NodeJS"
    ],
    "esPublico" : true
}
//console.log(infoCurso);

/** convertimos este "Objeto JS" a una "Cadena de caracteres JSON", usando stringify() */
let infoCursoJSON = JSON.stringify(infoCurso); // convierto a formato cadena de caracteres.
console.log(infoCursoJSON); // mostramos como Cadena de Caracteres (infoCursoJSON) el Objeto JS (infoCurso) .
console.log(typeof infoCursoJSON ) // validamos que es un tipo de dato string
console.log(infoCursoJSON.titulo); // intentamos llamar a una clave de JSON, pero no se puede porque es cadena de caracteres

/** recibimos "Cadena de Caracteres" y convertimos a un "Objeto JS" para trabajarlo, usando parce(). */
let infoCursoJSONObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoJSONObjeto); // mostramos como "Objeto o JSON" (infoCursoJSONObjeto) de la "Cadena de Caracteres" (infoCursoJSON)
console.log(typeof infoCursoJSONObjeto ); // validamos que es un tipo objetc
console.log(infoCursoJSONObjeto.titulo); // intentamos llamar a una clave de JSON, se puede porque es objeto.