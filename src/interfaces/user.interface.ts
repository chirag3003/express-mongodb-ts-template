import { Response, Request } from 'express'

export interface IUserController {
  me(req: Request, res: Response): Promise<void>
}

export interface IUserService {
  getUserByEmail(email: string): Promise<IUser | null>
  getUserById(id: string): Promise<IUser | null>
}
