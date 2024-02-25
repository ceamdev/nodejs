/** Creando nuestro servidor. */
// importamos express con require.
const express = require('express');
// iniciamos aplicacion en express.
const app = express();

/** Exportamos los require necesarios. */
// importamos "base de datos db_cursos" usamos la sintaxis de destruccturacion de javascript.
const { infoCursos } = require('./bd_cursos'); 
// console.log(infoCursos); // verificamos los datos de infoCursos

/** Creando Rutas o Enrutamientos Routing */
// implementamos nuestras rutas (routing o enrutamiento) usando Express mediante app de la siguiente forma.
app.get('/', (req, res)=>{
    res.send('Mi primer servidor. Express con NodeJS, usando ahora Nodemon :D');
});
// Implementando /api/ para mostrar datos de db_cursos.js // y mostramos el json formateado.
app.get('/api/', (req, res)=>{
    res.send('Información sobre la API :D');
});
// Implementando api/cursos para mostrar datos de db_cursos.js // y mostramos el json formateado.
app.get('/api/cursos', (req, res)=>{
    res.send(infoCursos);
});
// Implmentamos api/cursos/json, para mostrar datos db_cursos.js // para mostrar json sin formato.
app.get('/api/cursos/json', (req, res)=>{
    res.send(JSON.stringify(infoCursos));
});
// Implementamos rutas para curso espeficicos o datos especificos del JSON.
app.get('/api/cursos/programacion', (req, res)=>{
    res.send(infoCursos.programacion);
});
// Implementamos rutas para curso espeficicos o datos especificos del JSON.
app.get('/api/cursos/programacion/json', (req, res)=>{
    res.send(JSON.stringify(infoCursos.programacion));
});
// Implementamos rutas para curso espeficicos o datos especificos del JSON.
app.get('/api/cursos/matematicas', (req, res)=>{
    res.send(infoCursos.matematicas);
});
// Implementamos rutas para curso espeficicos o datos especificos del JSON.
app.get('/api/cursos/matematicas/json', (req, res)=>{
    res.send(JSON.stringify(infoCursos.matematicas));
});

/** Optomozando y Mejorando el uso de Rutas o Enrutamientos Routing para "automatizar" el enrutado. 
 * Utilizacion de los Parametros URL, para tratar las URL de los Enrutamientos. Nos permite generalizar 
 * los valores que varian dentro de una URL los parametros se establecen con /:parametro_url, los podemos extraer
 * del req, mediante req.params.parametro_url de la siguiente forma.
*/
// cursos de programacion filtrados por lengujae
app.get('/api/cursos/programacion/:lenguaje', (req, res)=>{
  // establecemos la solicitud de para parametrizar la url según el parametro_url escogido.
  const lenguaje = req.params.lenguaje;
  // filtramos infoCursos.programacion mediante la propiedad FILTER de javascript
  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

  // Si el lenguaje no existe o no esta establecido en db_cursos.
  if (resultados.length === 0) {
      //retornamos una respuesta del resultado vacio o no encontrado.
      return res.status(404).send(`El curso que indicas de ${lenguaje}, no se ha encontrado.`);
  }
  /** incluimos los parametros query para ordenar y/o establecer filtros segun datos especificios. */
  // consultamos por ejemplo.
  console.log(req.query.ordenar); // <!-- quede aqui 24/02/2024 - 11:29pm... --!>

  // enviamos la respuesta del nuevo objeto filtrado, si todo esta correcto.
  res.send(JSON.stringify(resultados));
});
// para filtrar por lenguajes y niveles
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res)=>{
    // establecemos el parametro_url escogido "lenguaje".
    const lenguaje = req.params.lenguaje;
    // establecemos el parametro_url escogido "nivel".
    const nivel = req.params.nivel;
    // filtramos infoCursos.programacion mediante la propiedad FILTER de javascript
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    // Si el nivel no existe o no esta establecido en db_cursos.
    if (resultados.length === 0) {
        //retornamos una respuesta del resultado vacio o no encontrado.
        return res.status(404).send(`El curso de ${lenguaje} y en nivel ${nivel}, no se ha encontrado.`);
    }
    // enviamos la respuesta del nuevo objeto filtrado, si todo esta correcto.
    res.send(JSON.stringify(resultados));
});
// cursos de matematicas.
app.get('/api/cursos/matematicas/:tema', (req, res)=>{
  // establecemos la solicitud de para parametrizar la url según el parametro_url escogido.
  const tema = req.params.tema;
  // filtramos infoCursos.programacion mediante la propiedad FILTER de javascript
  const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);
  // Si el tema no existe o no esta establecido en db_cursos.
  if (resultados.length === 0) {
      //retornamos una respuesta del resultado vacio o no encontrado.
      return res.status(404).send(`El curso que indicas de ${tema}, no se ha encontrado.`);
  }
  // enviamos la respuesta del nuevo objeto filtrado, si todo esta correcto.
  res.send(JSON.stringify(resultados));

});


/** parametros query o de busqueda, se utilizan frecuentemente para ordenar datos de un base de datos en las vista. */



/**  le indicamos que el servidor escuche las solicitudes, usando metodo listen mediante app.*/
//const PUERTO = 3000; // para trabajar localmente.
const PUERTO = process.env.PORT || 3000; // para entornos reales donde el hosting te asigna un puerto, si esta den .env tomará el por defecto, sino tomará el 3000.

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});