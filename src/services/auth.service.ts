import { IAuthService } from 'interfaces/auth.interface'
import { getPasswordKeys } from 'lib/user.lib'
import { User } from 'models/user.model'
import { CreateUserInput } from 'validators/user.validator'

export class AuthService implements IAuthService {
  async createUser({ password, ...input }: CreateUserInput): Promise<IUser> {
    const user = new User(input)
    const passwordKeys = getPasswordKeys(password)
    user.salt = passwordKeys.salt
    user.hash = passwordKeys.hash
    await user.save()
    return user as IUser
  }
}
