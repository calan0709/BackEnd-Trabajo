import express  from "express";
import productRouter from './routes/product.router.js'
import cartsRouter from './routers/carts.router.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./src/public'))
app.use('/api/product', productRouter)
app.use('/api/carts', cartsRouter)

app.listen(8080, ()=> console.log("listening 8080"));