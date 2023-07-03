import { Router } from "express";

const router = Router(); 

const carts = []; 

router.get('/', (req, res)=>{
    res.send(carts)
})


router.post('/', (req, res)=>{
    const cart = req.body;
    carts.push(cart);
    res.send ({status: "sucess", messege: "pet create"})
})


router.put('/', (req,res)=>{

})

router.delete('/', (req, res)=>{
    
})

export default router;