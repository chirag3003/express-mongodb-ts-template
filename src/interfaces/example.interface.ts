import { NextFunction, Request, Response } from 'express'

export interface IExampleController {
  getExample(req: Request, res: Response, next: NextFunction): Promise<void>
}

export interface IExampleService {
  getExamples(): Promise<IExample[]>
}
