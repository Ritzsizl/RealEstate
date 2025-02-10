import express from 'express';
import { deleteUser, test } from '../api/controllers/user.controllers.js';
import { updateUser } from '../api/controllers/user.controllers.js';
import { verifyToken } from '../api/utils/verifyUser.js';

const userRouter = express.Router();

userRouter.get('/test', test);
userRouter.post('/update/:id', verifyToken,updateUser);
userRouter.delete('/delete/:id', verifyToken, deleteUser)


export default userRouter;