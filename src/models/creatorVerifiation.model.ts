import mongoose from 'mongoose'

const createorVerificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  }
)

const CreatorVerification = mongoose.model(
  'creatorVerification',
  createorVerificationSchema
)

export default CreatorVerification
