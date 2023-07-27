import { NextFunction, Request, Response } from 'express'

export interface IExampleController {
  getExample(req: Request, res: Response, next: NextFunction): Promise<void>
}
