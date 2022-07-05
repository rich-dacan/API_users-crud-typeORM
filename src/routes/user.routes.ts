import { Router } from 'express'
import UserController from '../controllers/users/user.controller'

const userRouter = Router()

userRouter.get('', UserController.list)
userRouter.post('', UserController.create)

userRouter.post('/login', UserController.userLogin)
userRouter.get('/me', UserController.userListOne)

export default userRouter