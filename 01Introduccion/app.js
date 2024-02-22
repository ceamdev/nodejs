
/** Si queremos llamar a solo 1 dato dentro de modulo saludos.js usamos la destructuración */
const { saludar, saludarHolaMundo } = require('./saludos.js');

/** esctructura de importación de todo los datos de saludos.js. */
//const saludos = require('./saludos.js');

//console.log(saludo); // se exporta es un objeto de exportaciones.
//console.log(saludar("Carlos"));

// debemos llamar al objeto "saludos" creado para poder tener acceso.
//console.log(saludos.saludar('Carlos'));
//console.log(saludos.saludarHolaMundo());

// llamando desde la destructuración.
console.log(saludar('Carlos'));
console.log(saludarHolaMundo());