import { IAdminService } from '@/interfaces/admin.interface'
import { getPasswordKeys } from '@/lib/auth.lib'
import Admin from '@/models/admin.model'
import { CreateAdminInput } from '@/validators/admin.validator'

export default class AdminService implements IAdminService {
  async createAdmin(input: CreateAdminInput): Promise<IAdmin> {
    const admin = new Admin(input)
    const passwordKeys = getPasswordKeys(input.password)
    admin.hash = passwordKeys.hash
    admin.salt = passwordKeys.salt
    await admin.save()
    return admin
  }
}
