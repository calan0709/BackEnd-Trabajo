import { Router } from "express"; 

const router = Router();

const products = [];

router.get('/', (req, res)=>{ 
    res.send(products) 
})

router.post('/', (req, res)=>{
    const product = req.body;
    products.push(product);
    res.send({status: "succes", message: "pet create"})
})

router.put('/', (req,res)=>{

})

router.delete('/', (req, res)=>{
    
})

export default router;