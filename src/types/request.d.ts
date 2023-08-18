import { Request } from 'express'

interface IRequest extends Request {
  user: IJWTData
}
