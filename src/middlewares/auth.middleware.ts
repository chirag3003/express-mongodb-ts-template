import { Request, Response, NextFunction } from 'express'
import { IAuthMiddleware } from '@/interfaces/auth.interface'
import { verifyJWT } from '@/lib/auth.lib'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'

export default class AuthMiddleware implements IAuthMiddleware {
  async authenticate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { authorization } = req.headers
      if (!authorization) {
        res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED)
        return
      }
      const userData = verifyJWT(authorization as string)
      console.log(userData)
      req.user = userData
      next()
    } catch (err) {
      console.error(err)
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(ReasonPhrases.INTERNAL_SERVER_ERROR)
      return
    }
  }
}
