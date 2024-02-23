const http = require('http');

const servidor = http.createServer((req, res)=>{
    res.end('Hola, soy ceamdev, pràcticando NodeJS. El servidor iniciado...');
});

const PUERTO = 3000;

servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}, ahora todo va de maravilla`);
});