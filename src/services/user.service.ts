import { IUserService } from '@/interfaces/user.interface'
import { User } from '@/models/user.model'

export class UserService implements IUserService {
  async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email })
    return user as IUser
  }

  async getUserById(id: string): Promise<IUser | null> {
    const user = await User.findById(id)
    return user as IUser
  }
}
