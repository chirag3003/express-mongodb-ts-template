import mongoose from 'mongoose'

const exampleSchema = new mongoose.Schema(
  {
    msg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const Example = mongoose.model('example', exampleSchema)
