const http = require ('http');

const server = http.createServer((req, res) =>{
    res.end ('Hola Mundo desde http');
})
server.listen(8001, ()=>{
    console.log ('Levantando en el puerto 8001')
})