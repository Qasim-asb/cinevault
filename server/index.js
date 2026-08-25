import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import process from 'node:process'
import movieRoutes from './src/routes/movieRoutes.js'
import authRoutes from './src/routes/authRoutes.js'
import watchlistRoutes from './src/routes/watchlistRoutes.js'
import errorHandler from './src/middleware/errorHandler.js'
import notFound from './src/middleware/notFound.js'

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

export default app
