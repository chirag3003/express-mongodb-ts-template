import { Request, Response } from 'express'
import { CreateAdminInput } from '@/validators/admin.validator'

export interface IAdminController {
  createAdmin(req: Request, res: Response): Promise<void>
}

export interface IAdminService {
  createAdmin(input: CreateAdminInput): Promise<IAdmin>
}
