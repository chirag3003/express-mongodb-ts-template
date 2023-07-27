import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    if (mongoose.connection.readyState === 1)
      console.log('✅ MongoDB connected!')
    else throw new Error('❌ MongoDB connection failed!')
  } catch (error) {
    console.log(error)
  }
}

connectDB()
