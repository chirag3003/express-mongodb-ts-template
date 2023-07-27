import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { IAuthController } from '@/interfaces/auth.interface'
import { AuthService } from '@/services/auth.service'
import {
  CreateUserInput,
  createUserInputValidator,
  loginUserInputValidator,
} from '@/validators/user.validator'
import { ZodError } from 'zod'

const authService = new AuthService()

export class AuthController implements IAuthController {
  async signup(req: Request, res: Response): Promise<void> {
    try {
      const body = createUserInputValidator.parse(req.body as CreateUserInput)
      const data = await authService.createUser(body)
      res.status(StatusCodes.OK).json(data)
    } catch (err) {
      console.error(err)
      if (err instanceof ZodError) {
        res.sendStatus(StatusCodes.BAD_REQUEST)
        return
      }
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
  async login(req: Request, res: Response): Promise<void> {
    try {
      const body = loginUserInputValidator.parse(req.body)
      const user = await authService.loginUser(body.email, body.password)
      if (!user) {
        res.sendStatus(StatusCodes.UNAUTHORIZED)
        return
      }
      res.sendStatus(StatusCodes.OK)
    } catch (err) {
      console.error(err)
      if (err instanceof ZodError) {
        res.sendStatus(StatusCodes.UNAUTHORIZED)
        return
      }
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
