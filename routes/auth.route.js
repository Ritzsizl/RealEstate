import express from 'express';
import { signup } from '../api/controllers/auth.controllers.js';

const authRouter = express.Router();

authRouter.post('/signup', signup);

export default authRouter;