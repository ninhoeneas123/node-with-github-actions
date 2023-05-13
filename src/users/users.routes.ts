import { Router } from 'express'

import UsersController from './users.controller'


const usersRouter = Router()

usersRouter.get('/users/create', UsersController.createUser)



export default usersRouter