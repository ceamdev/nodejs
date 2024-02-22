function saludar(nombre){
    return `Hola, ${nombre}`;
}

/*ejemplo para activar exportación de datos desde este modulo */
//console.log(module.exports);
//console.log(module.exports.saludar = saludar);
//console.log(module.exports);

/* exportando mas de 1 functions o datos desde modulo. */
function saludarHolaMundo(){
    return '¡Hola, mundo!';
}

/** modulos de exportación linea por linea */
//module.exports.saludar = saludar;
//module.exports.saludarHolaMundo = saludarHolaMundo;

/** modulo de exportación como objetos, cuando son más de 2 objetos altenativa. */
module.exports = {
    saludar : saludar,
    saludarHolaMundo: saludarHolaMundo
}