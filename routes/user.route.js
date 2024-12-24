import express from 'express';
import { test } from '../api/controllers/user.controllers.js';
import { updateUser } from '../api/controllers/user.controllers.js';
import { verifyToken } from '../api/utils/verifyUser.js';

const userRouter = express.Router();

userRouter.get('/test', test);
userRouter.post('/update/:id', verifyToken,updateUser);

export default userRouter;