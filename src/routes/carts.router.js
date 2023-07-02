import { Router } from "express"; //lo importamos con llaves porque no es el esport default, 
//el export default es el modulo principal y este es un derivado internopero que pertenece a la libreria estoy importando un submodulo de rutas

const router = Router(); //es el miniaplicativo para que yo pueda redirigir

const carts = []; //arreglo vacio para incertar productos
//GET
//leemos la informacion de los productos
router.get('/', (req, res)=>{
    res.send(carts)
})

//create/Post
//crea un producto para insertarlo en nuestro array
router.post('/', (req, res)=>{
    const cart = req.body;
    carts.push(cart);
    res.send ({status: "sucess", messege: "pet create"})
})

//UPDATE
//antualizar el producto, con lo cual ahy que buscarlo por medio de un identificador.
router.put('/', (req,res)=>{

})

//delete

router.delete('/', (req, res)=>{
    
})

export default router;//esport por default (aca importante: cuando yo hago un export, lo hago para que otras partes de mi proyecto puedan importarlo)