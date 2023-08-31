import { Request, Response, NextFunction } from 'express'
import { IAuthMiddleware } from '@/interfaces/auth.interface'
import { verifyAdminJWT, verifyJWT } from '@/lib/auth.lib'
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
      req.user = userData
      next()
    } catch {
      res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED)
      return
    }
  }
  async authenticateAdmin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const authorization = req.headers['auth-admin']
      if (!authorization) {
        res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED)
        return
      }
      const userData = verifyAdminJWT(authorization as string)
      req.admin = userData
      next()
    } catch {
      res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED)
      return
    }
  }
}
