// importamos express con require.
const express = require('express');
// iniciamos aplicacion en express.
const app = express();
// importamos "base de datos db_cursos" usamos la sintaxis de destruccturacion de javascript.
const { infoCursos } = require('./bd_cursos'); 
// console.log(infoCursos); // verificamos los datos de infoCursos
// implementamos nuestras rutas (routing o enrutamiento) usando Express mediante app de la siguiente forma.
app.get('/', (req, res)=>{
    res.send('Mi primer servidor. Express con NodeJS, usando ahora Nodemon :D');
});
// le indicamos que el servidor escuche las solicitudes, usando metodo listen mediante app.

//const PUERTO = 3000; // para trabajar localmente.
const PUERTO = process.env.PORT || 3000; // para entornos reales donde el hosting te asigna un puerto, si esta den .env tomará el por defecto, sino tomará el 3000.

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});