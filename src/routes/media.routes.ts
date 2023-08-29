import MediaController from '@/controllers/media.controller'
import { uploadSingleS3 } from '@/middlewares/multer.middleware'
import { Router } from 'express'

const router = Router()

const { uploadMedia } = new MediaController()

router.post('/', uploadSingleS3(), uploadMedia)

export default router
