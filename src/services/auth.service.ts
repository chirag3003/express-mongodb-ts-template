import { IAuthService } from 'interfaces/auth.interface'
import { User } from 'models/user.model'
import { CreateUserInput } from 'validators/user.validator'

export class AuthService implements IAuthService {
  async createUser({ password, ...input }: CreateUserInput): Promise<IUser> {
    const user = new User(input)
    user.setPassword(password)
    await user.save()
    return user as any
  }
}
