import { Router } from "express";

const router = Router(); //es el miniaplicativo para que yo pueda redirigir

const products = []; //arreglo vacio para incertar productos
//GET
//leemos la informacion de los productos
router.get('/', (req, res)=>{ //request es la peticion del cliente, response es la repuesta del servidor
    res.send(products) // solicitamos obtener los productos
})

//create/Post
//crea un producto para insertarlo en nuestro array
router.post('/', (req, res)=>{
    const product = req.body;
    products.push(product);
    res.send({status: "succes", message: "pet create"})
})

//UPDATE
//antualizar el producto, con lo cual ahy que buscarlo por medio de un identificador.
router.put('/', (req,res)=>{

})

//delete

router.delete('/', (req, res)=>{
    
})

export default router;//esport por default (aca importante: cuando yo hago un export, lo hago para que otras partes de mi proyecto puedan importarlo)