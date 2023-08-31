import { IAdminController } from '@/interfaces/admin.interface'
import AdminService from '@/services/admin.service'
import { createAdminInputValidator } from '@/validators/admin.validator'
import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

const adminService = new AdminService()

export default class AdminController implements IAdminController {
  async createAdmin(req: Request, res: Response): Promise<void> {
    try {
      const body = createAdminInputValidator.parse(req.body)
      await adminService.createAdmin(body)
      res.status(StatusCodes.CREATED).send('Admin created successfully')
      return
    } catch (err) {
      res.sendStatus(StatusCodes.BAD_REQUEST)
      return
    }
  }
}
