import UserController from '@/controllers/user.controller'
import AuthMiddleware from '@/middlewares/auth.middleware'
import { Router } from 'express'

const { me } = new UserController()
const { authenticate } = new AuthMiddleware()

const router = Router()

router.get('/me', authenticate, me)

export default router
