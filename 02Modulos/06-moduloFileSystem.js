/** MODULO FS (FILE SYSTEM) SISTEMA DE ARCHIVOSS 
 * Con este modulo podemos Leer, Modificar, Copiar, Eliminar y Cambiar el nombre a un archivo, 
 * dentro de nuestro sistema de nodejs. De igual forma permite Crer y Modificar capertas. Los metodos
 * de este modulo es todo asincronos (async), sin embargo se puede ejecutar o elegir operaciones 
 * sincronas (sync).
 * fs.rename() (async) asincrono.
 * fs.renameSync() (sync) sincrono.
*/

const fs = require('fs');

console.log("Antes de leer el archivo");

/** fs.readFile, para leer el contenido de un archivo. */
// // fs.readFile Leer un Archivo.
//fs.readFile('index.html', 'utf-8', (error, contenido)=> { // async (por defecto)
fs.readFileSync('index.html', 'utf-8', (error, contenido)=> { //sync
    if (error) {
        //console.log(error);
        //** throw detener ejecución de programa y nos da mas detalles del error en la teminal. */
        throw error;
    } else {
        console.log(contenido);
    }
    //console.log("Mesnaje...");
});

console.log("Luego de leer el archivo, antes de cambiarle el nombre");

/** fs.rename para cambiar el nombre de un archivo */
//fs.rename('index.html', 'main.html', (error,)=>{ //async (por defecto)
fs.renameSync('index.html', 'main.html', (error,)=>{ //sync
    if (error) {
        throw error;
    }else{
        console.log("Se cambio el nombre correctamente.");
    }
});

console.log("Despues de cambiar el nombre, antes de agregar contenido al archivo.");

/** para agregar contenido al documento html */
// // fs.appendFile Agregar contendio al final de un archivo.
//fs.appendFile('main.html','<p>Hola nuevo contenido</p>', (error)=>{ // async (por defecto)
fs.appendFileSync('main.html','<p>Hola nuevo contenido</p>', (error)=>{ //sync
    if(error){
        throw error;
    }else {
        console.log("Archivo actualizado...");
    }
})

console.log("Despues de agregar el contenido, antes de cambiar el contenido del archivo.");

// // fs.writeFile Replanzar todo el contenido del archivo
// fs.writeFile('main.html','Nuevo contenido del documento. xD!', (error)=>{ // asycn (por defecto)
fs.writeFileSync('main.html','Nuevo contenido del documento. xD!', (error)=>{ // sync
    if (error) {
        throw error;
    }else {
        console.log("Se modifico el contendio del archivo.");
    }
})

console.log("Despues de reemplazar el contenido, y antes de eliminarlo");

// fs.unlink Eliminar un archivo.
// fs.unlink('main.html', (error)=>{ //async (por defecto)
fs.unlinkSync('main.html', (error)=>{ // sync
    if (error) {
        throw error;
    } else {
        console.log("Archivo eliminado, correctamente.");
    }
}) 

console.log("Despues de eliminar el archivo.");
