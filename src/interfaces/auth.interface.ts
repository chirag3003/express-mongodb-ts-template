import { Request, Response } from 'express'
import { CreateUserInput } from 'validators/user.validator'

export interface IAuthController {
  signup(req: Request, res: Response): Promise<void>
  login(req: Request, res: Response): Promise<void>
}

export interface IAuthService {
  createUser(input: CreateUserInput): Promise<IUser>
}
