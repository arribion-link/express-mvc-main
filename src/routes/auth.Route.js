import express from 'express';
const authRoute = express.Router();

// controllers
import { register, login } from '../controllers/authControllers.js';

authRoute.post('/login', login);
authRoute.post('/register', register);

export default authRoute;