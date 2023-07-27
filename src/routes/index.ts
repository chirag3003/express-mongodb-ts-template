import { Router } from 'express'
import exampleRoutes from './example.routes'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'

const router = Router()

router.use('/example', exampleRoutes)
router.use('/auth', authRoutes)
router.use('/user', userRoutes)

export default router
