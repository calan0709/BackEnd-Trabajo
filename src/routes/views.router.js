import { Router } from "express";


const router = Router();


/* app.get ('/', (req,res)=>{
    const user = {
        name : 'Santiago del moro'
    };
    res.render('index',user)//renderiza en el archivo INDEX el dato que esta en USER
}) */
const food = [ //crea objeto con nombre food
    {name:"pizza", price:1000},
    {name:"hambuergesa", price:500},
    {name:"papas fritas", price:400},
    {name:"pollo frito", price:600},
    {name:"pescadofrito", price:900}
]
router.get('/', (req, res)=>{
    const user = {
        name:'gonza',
        role:'admin'
    }
    res.render('index',{//va a renderizar en INDEX lo que dice a continuacion
        user,
        isAdmin:user.role === 'admin',// si en isAdmin, user.role es igual a admin me vas a renderizar food.
        food
    })
})

router.get('/register', (req, res)=>{
    res.render('register');
})

export default router;