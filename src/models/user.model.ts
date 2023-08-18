import mongoose from 'mongoose'

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
    phoneNo: {
      type: Number,
    },
    creator: {
      type: Boolean,
      default: false,
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
  }
)
export const User = mongoose.model('user', userSchema)
