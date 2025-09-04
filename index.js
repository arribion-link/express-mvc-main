import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import connectDB from './src/config/db.js';
// routes
import authRoute from './src/routes/auth.Route.js';

const app = express();
import dotenv from 'dotenv';
dotenv.config();

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

app.use('/', authRoute);

const initApp = async  () => {
    await connectDB()
    app.listen(port, ()=>{
        console.log(`http://localhost:${port}`)
    })
}

initApp();