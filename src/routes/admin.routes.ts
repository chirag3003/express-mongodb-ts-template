import AdminController from '@/controllers/admin.controller'
import AuthMiddleware from '@/middlewares/auth.middleware'
import { Router } from 'express'

const router = Router()

const { createAdmin } = new AdminController()
const { authenticateAdmin } = new AuthMiddleware()

router.post('/create', authenticateAdmin, createAdmin)

export default router
