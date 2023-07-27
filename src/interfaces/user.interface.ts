import { Request, Response } from 'express'

export interface IUserController {
  me(req: Request, res: Response): Promise<void>
}

export interface IUserService {
  getUser(id: string): void
}