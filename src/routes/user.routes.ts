import { Router } from 'express';
import UserController from '../controllers/users/user.controller';
import { authUserMiddleware } from '../middlewares/authUser.middleware';

const userRouter = Router();

userRouter.post('', UserController.create);
userRouter.post('/login', UserController.login);
userRouter.get('', authUserMiddleware, UserController.list);
userRouter.get('/me', authUserMiddleware, UserController.listActualUser);
userRouter.delete('/me', authUserMiddleware, UserController.selfDelete);
userRouter.patch('/me/update_password', authUserMiddleware, UserController.updatePassword);

export default userRouter;