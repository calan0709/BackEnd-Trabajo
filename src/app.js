import Express  from "express";
import productRouter from './routes/product.router.js'
import cartsRouter from './routers/carts.router.js'

const app = Express(); //app recibe la peticion, va a reconocer la peticion de tipo usuario y va a redirijirla al archivo product.router.js
//para que detecte los objetos que envio del codigo le digo que debe soportar el formato epress y json
app.use(Express.json());
app.use(Express.urlencoded({extended: true})); //objetos codificados desde la URL
app.use(Express.static('./src/public'))
app.use('/api/product', productRouter)// con esta linea de codigo ya me puedo conectar a los miniaplicativos
app.use('/api/carts', cartsRouter)

app.listen(8080, ()=> console.log("listening 8080")) //y esa aplicacion de espress esta escuchando en un puerto