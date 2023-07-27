import { AuthController } from 'controllers/auth.controller'
import { Router } from 'express'

const router = Router()

const { signup } = new AuthController()

router.post('/signup', signup)
router.post('/login')

export default router
