import mongoose from 'mongoose'

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected')
})

mongoose.connection.on('error', error => {
  console.error('MongoDB error:', error.message)
})

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected')
})

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: 'CineVault',
    serverSelectionTimeoutMS: 5000
  })
}

export const disconnectDB = async () => {
  await mongoose.connection.close()
  console.log('MongoDB connection closed')
}
