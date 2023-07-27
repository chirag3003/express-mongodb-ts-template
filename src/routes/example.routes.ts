import ExampleController from '@/controllers/example.controller'
import { Router } from 'express'

const router = Router()

const { getExample, getExamples } = new ExampleController()

router.get('/', getExamples)
router.get('/:id', getExample)

export default router
