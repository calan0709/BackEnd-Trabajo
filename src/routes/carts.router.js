import { Router } from "express"; 
import uploader from "../services/uploader.js";

const router = Router();

const carts = [];

router.get('/', (req, res)=>{
    res.send(carts)
})

router.post('/', uploader.single("image"), (req, res)=>{
    const cart = req.body;
    carts.push(cart);
    res.send ({status: "sucess", messege: "pet create"})
})

router.put('/', (req,res)=>{

})


router.delete('/', (req, res)=>{
    
})

export default router;