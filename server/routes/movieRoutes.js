import { Router } from 'express'
import { getMovie, getMovies, searchMovieResults } from '../controllers/movieController.js'

const router = Router()

router.get('/', getMovies)
router.get('/search', searchMovieResults)
router.get('/:id', getMovie)

export default router