import { Router } from 'express'
import exampleRoutes from './example.routes'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import mediaRoutes from './media.routes'
import adminRoutes from './admin.routes'

const router = Router()

router.use('/example', exampleRoutes)
router.use('/auth', authRoutes)
router.use('/user', userRoutes)
router.use('/media', mediaRoutes)
router.use('/admin', adminRoutes)

export default router
