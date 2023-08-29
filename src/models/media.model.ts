import mongoose from 'mongoose'

const mediaSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  ETag: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
})

const Media = mongoose.model('upload', mediaSchema)

export default Media
