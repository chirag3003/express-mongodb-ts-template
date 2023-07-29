import crypto from 'node:crypto'
import jwt from 'jsonwebtoken'

export const getPasswordKeys = (password: string) => {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
    .toString('hex')

  return { salt, hash }
}

export const validatePassword = (
  password: string,
  hash: string,
  salt: string
): boolean => {
  try {
    const h = crypto
      .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
      .toString('hex')
    return hash === h
  } catch {
    return false
  }
}

export const generateJWT = (data: IJWTData): string => {
  return jwt.sign(data, 'string', { expiresIn: '10d' })
}
