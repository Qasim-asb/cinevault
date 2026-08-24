import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import process from 'node:process'
import movieRoutes from './src/routes/movieRoutes.js'
import errorHandler from './src/middleware/errorHandler.js'
import notFound from './src/middleware/notFound.js'
import { connectDB } from './src/config/db.js'
import authRoutes from './src/routes/authRoutes.js'
import watchlistRoutes from './src/routes/watchlistRoutes.js'

dotenv.config()

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL
  })
)

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'CineVault API is running'
  })
})

app.use('/api/movies', movieRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/watchlist', watchlistRoutes)

app.use(notFound)

app.use(errorHandler)

connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})