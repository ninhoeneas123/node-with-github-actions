import { Router } from 'express'

import UsersController from './users-controller'


const usersRouter = Router()

usersRouter.post('/users/create', UsersController.createUser)
usersRouter.get('/users/list', UsersController.listUsers)
usersRouter.delete('/users/delete/:id', UsersController.deleteUser)

export default usersRouter