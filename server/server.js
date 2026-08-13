import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import process from 'node:process'
import movieRoutes from './routes/movieRoutes.js'
import errorHandler from './middleware/errorHandler.js'
import notFound from './middleware/notFound.js'

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

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})