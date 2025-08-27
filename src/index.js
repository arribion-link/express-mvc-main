import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
// routes
import authRoute from './routes/auth.Route.js';

// application middleware
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
if(!port){
    console.log('error access port number...');
    process.exit(1);
}

app.use('/', authRoute);

app.listen(port, ()=>{
    console.log('app running sucessfully...');
    console.log(`http://localhost:${port}/register`);
})
