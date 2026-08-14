import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import process from 'node:process'
import movieRoutes from './routes/movieRoutes.js'
import errorHandler from './middleware/errorHandler.js'
import notFound from './middleware/notFound.js'
import { connectDB } from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import watchlistRoutes from './routes/watchlistRoutes.js'

dotenv.config()

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173'
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