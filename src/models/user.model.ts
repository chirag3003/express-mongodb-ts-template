import mongoose from 'mongoose'
import crypto from 'node:crypto'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    hash: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    methods: {
      setPassword(password: string) {
        this.salt = crypto.randomBytes(16).toString('hex')
        this.hash = crypto
          .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
          .toString('hex')
      },
      validatePassword(password: string) {
        try {
          const hash = crypto
            .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
            .toString('hex')
          return this.hash === hash
        } catch {
          return false
        }
      },
      generateJWT(): string {
        const today = new Date()
        const expirationDate = new Date(today)
        expirationDate.setDate(today.getDate() + 60)

        return jwt.sign(
          {
            email: this.email,
            hash: this.hash,
            id: this._id,
            exp: expirationDate.getTime() / 1000,
          },
          'secret'
        )
      },
    },
  }
)
export const User = mongoose.model('user', userSchema)
