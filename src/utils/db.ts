import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)

    //checking if the database connection was successful
    if (mongoose.connection.readyState === 1)
      console.log('✅ MongoDB connected!')
    //throwing an error if the connection was not successful
    else throw new Error('❌ MongoDB connection failed!')
  } catch (error) {
    console.log(error)
  }
}

connectDB()
