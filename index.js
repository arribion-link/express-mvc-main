import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
if(!port){
    console.log('error access port number...')
    process.exit(1);
}

app.get('/', (req, res)=>{
    res.send('hello express');
});

app.listen(port, ()=>{
    console.log('app running sucessfully...');
    console.log(`http://localhost:${port}`);
})
