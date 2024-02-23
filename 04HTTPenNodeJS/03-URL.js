/** Trabajando en la construccion de URL  */
// Creamos objeto URL.
const miURL = new URL('https://www.ejemplos.com/cursos/programacion?ordenar=vistas&nivel=1'); // podemos pasarle parametros a la URL.

console.log(miURL.hostname); // nombre principal www.ejemplos.com

console.log(miURL.pathname); // accedemos al camino o path

console.log(miURL.searchParams) // obtenemos los parametros de busqueda, los trae como objetos.
// comprobando que es un objeto.
console.log(typeof miURL.searchParams); // para determinar tipo de dato obtenido.

// acceder a las propiedades y sus valores.
console.log(miURL.searchParams.get('ordenar')); // obtener el propiedad = valor.
console.log(miURL.searchParams.get('nivel')); // obtener el propiedad = valor.