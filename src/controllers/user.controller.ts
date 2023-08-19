import { IUserController } from '@/interfaces/user.interface'
import { UserService } from '@/services/user.service'
import { IRequest } from '@/types/request'
import { responseUserValidator } from '@/validators/user.validator'
import { Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

const userService = new UserService()
export default class UserController implements IUserController {
  async me(req: IRequest, res: Response): Promise<void> {
    try {
      const { _id } = req.user
      const user = await userService.getUserById(_id)
      res.send(responseUserValidator.parse(user))
    } catch (err) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  }
}
