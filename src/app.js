import express  from "express";
//import { Server } from "socket.io";
//import productRouter from './routes/product.router.js';
//import cartsRouter from './routes/carts.router.js';
import __dirname from "./utils.js";
import viewsRouter from './routes/views.router.js';
import handlebars from 'express-handlebars';

const app = express(); //iniciamos express con la variable APP, la cual contendra todas las funcionalidades de la dependencia.
//app recibe la peticion, va a reconocer la peticion de tipo usuario y va a redirijirla al archivo product.router.js

//para que detecte los objetos que envio del codigo le digo que debe soportar el formato epress y json
app.use(express.json());
app.use(express.urlencoded({extended: true})); //objetos codificados desde la URL
app.use(express.static((`${__dirname}/public`)));

app.engine('handlebars', handlebars.engine());//con que motor de plantilla estoy trabajando
app.set('views', `${__dirname}/views`);// en que directorio estoy trabajando "VIEWS"
app.set('view engine', 'handlebars');//estamos trabajando con "handlebars"


//app.use('/api/product', productRouter);// con esta linea de codigo ya me puedo conectar a los miniaplicativos
//app.use('/api/carts', cartsRouter);
app.use('/', viewsRouter);

app.listen(8080, ()=> console.log("listening 8080")); //y esa aplicacion de espress esta escuchando en un puerto