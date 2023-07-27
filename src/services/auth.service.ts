import { IAuthService } from 'interfaces/auth.interface'
import { getPasswordKeys, validatePassword } from 'lib/user.lib'
import { User } from 'models/user.model'
import { CreateUserInput } from 'validators/user.validator'

export class AuthService implements IAuthService {
  async loginUser(email: string, password: string): Promise<IUser | null> {
    const user = await User.findOne({ email })
    if (!user) return null
    const validPassword = validatePassword(password, user.hash, user.salt)
    if (!validPassword) return null
    return user as IUser
  }
  async createUser({ password, ...input }: CreateUserInput): Promise<IUser> {
    const user = new User(input)
    const passwordKeys = getPasswordKeys(password)
    user.salt = passwordKeys.salt
    user.hash = passwordKeys.hash
    await user.save()
    return user as IUser
  }
}
