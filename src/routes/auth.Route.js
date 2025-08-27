import express from 'express';
const authRoute = express.Router();

// controllers


authRoute.get('/register', (req, res)=>{res.render('register.ejs')})
authRoute.get('/login',(req, res)=>{res.render('login.ejs')})

authRoute.post('/register',(req, res)=>{
    res.send('')
})

authRoute.post('/login',(req, res)=>{
    res.send('login page');
})

export default authRoute