import { Request, Response } from 'express'
import { IExampleController } from '@/interfaces/example.interface'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { ExampleService } from '@/services/example.service'

const exampleServices = new ExampleService()

export default class ExampleController implements IExampleController {
  async getExample(req: Request, res: Response) {
    try {
      res.status(StatusCodes.OK).send(ReasonPhrases.OK)
    } catch (err) {
      console.error(err)
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
  async getExamples(req: Request, res: Response) {
    try {
      const data = await exampleServices.getExamples()

      res.status(StatusCodes.OK).json(data)
    } catch (err) {
      console.error(err)
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
