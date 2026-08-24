import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addToWatchlist, getWatchlist, removeFromWatchlist } from '../controllers/watchlistController.js'

const router = express.Router()

router.get('/', authMiddleware, getWatchlist)
router.post('/', authMiddleware, addToWatchlist)
router.delete('/:movieId', authMiddleware, removeFromWatchlist)

export default router