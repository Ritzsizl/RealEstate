import express from 'express';
import { test } from '../api/controllers/user.controllers.js';


const userRouter = express.Router();

userRouter.get('/test', test);

export default userRouter;