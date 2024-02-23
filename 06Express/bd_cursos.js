// creamos objetos para simular datos traidos desde un base de datos. Y los Exportamos a app.js (archivo)
let infoCursos = {
    'programacion' : [{
        id: 1,
        titulo : 'Aprender Python',
        lenguaje: 'python',
        vistas : 15000,
        nivel : 'basico'
    },{
        id : 2,
        titulo : 'Python Intermedio',
        lenguaje : 'python',
        vistas : 12000,
        nivel : 'intermedio'
    },{
        id : 3,
        titulo : 'Javascript',
        lenguaje : 'javascript',
        vistas : 10000,
        nivel : 'intermedio'
    }],
    'matematicas' : [{
        id: 1,
        titulo : 'Aprende Calculo',
        tema : 'calculo',
        vistas : 12345,
        nivel : 'basico'
    },{
        id : 2, 
        titulo: 'Aprende Algebra',
        tema : 'algebra',
        vistas : 13421,
        nivel : 'intermedio'
    }]
}
// doy los permisos para que puedan ser exportados.
module.exports.infoCursos = infoCursos;