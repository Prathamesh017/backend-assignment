import { Router } from 'express'
import loginUser from '../service/auth-service.js'
const authRouter = Router()

authRouter.post('/login', loginUser)

export default authRouter
