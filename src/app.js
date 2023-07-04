import express  from "express";
import productRouter from './routes/product.router.js';
import cartsRouter from './routes/carts.router.js';
import __dirname from "./utils.js";

const app = express(); 
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static((`${__dirname}/public`)))

/* app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars'); */

app.use('/api/product', productRouter)
app.use('/api/carts', cartsRouter)

app.listen(8080, ()=> console.log("listening 8080")); 