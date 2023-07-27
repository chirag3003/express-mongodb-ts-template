import { AuthController } from '@/controllers/auth.controller'
import { Router } from 'express'

const router = Router()

const { signup, login } = new AuthController()

router.post('/signup', signup)
router.post('/login', login)

export default router
