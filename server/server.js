import process from 'node:process'
import app from './index.js'
import { connectDB, disconnectDB } from './src/config/db.js'

const PORT = process.env.PORT || 5000

let server
let isShuttingDown = false

const startServer = async () => {
  try {
    await connectDB()

    server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Server failed to start:', error.message)
    process.exit(1)
  }
}

const gracefulShutdown = async signal => {
  if (isShuttingDown) return

  isShuttingDown = true

  console.log(`${signal} received. Shutting down gracefully...`)

  if (server) {
    await new Promise(resolve => {
      server.close(() => {
        console.log('HTTP server closed')
        resolve()
      })
    })
  }

  await disconnectDB()

  console.log('Process terminated cleanly')
  process.exit(0)
}

process.on('SIGINT', () => gracefulShutdown('SIGINT'))
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))

process.on('uncaughtException', async error => {
  console.error('Uncaught Exception:', error)
  await gracefulShutdown('uncaughtException')
})

process.on('unhandledRejection', async error => {
  console.error('Unhandled Rejection:', error)
  await gracefulShutdown('unhandledRejection')
})

startServer()
