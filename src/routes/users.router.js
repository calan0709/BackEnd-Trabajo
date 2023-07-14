import { Router } from "express";

const router = Router();
const users = [];

router.post('/', (req, res)=>{
    const user = req.body;//req.body= permite ver que viaja en el cuerpo del mensaje
    users.push(user);//en users un push de user
    res.send ({status: 'succes', user})
});

router.get('/', (req, res)=>{
    res.send({ users })
})

export default router;