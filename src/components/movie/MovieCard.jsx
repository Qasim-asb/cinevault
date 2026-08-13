import { useState } from 'react'
import { Check, Play, Plus, Star } from 'lucide-react'
import useWatchlist from '../../hooks/useWatchlist'
import { Link } from 'react-router-dom'
import TrailerModal from './TrailerModal'

const MovieCard = ({ movie }) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const { toggleWatchlist, isInWatchlist } = useWatchlist()
  const { title, year, rating, genres, image } = movie
  const movieInWatchlist = isInWatchlist(movie.id)

  return (
    <article className='group relative w-44 shrink-0 overflow-hidden rounded-xl bg-zinc-900 sm:w-48'>
      <div className='relative aspect-[2/3] overflow-hidden'>
        <Link to={`/movies/${movie.id}`} className='block h-full w-full'>
          {imageError ? (
            <div className='flex h-full w-full items-center justify-center bg-zinc-800 px-4 text-center'>
              <span className='text-sm font-semibold text-gray-500'>{title}</span>
            </div>
          ) : (
            <img src={image} alt={title} loading='lazy' decoding='async' onError={() => setImageError(true)} className='h-full w-full object-cover transition duration-500 group-hover:scale-110' />
          )}
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition group-hover:opacity-100' />
        </Link>

        <div className='absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
          <button onClick={() => setIsTrailerOpen(true)} aria-label={`Play ${title}`} className='flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-red-500 hover:text-white'>
            <Play size={16} fill='currentColor' />
          </button>
          <button onClick={() => toggleWatchlist(movie)} className='flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white hover:text-black' aria-label={movieInWatchlist ? `Remove ${title} from watchlist` : `Add ${title} to watchlist`}>
            {movieInWatchlist ? <Check size={18} /> : <Plus size={18} />}
          </button>
        </div>
      </div>

      <Link to={`/movies/${movie.id}`} className='block p-3'>
        <h3 className='truncate font-semibold text-white'>{title}</h3>
        <div className='mt-1 flex items-center justify-between text-xs text-gray-400'>
          <span>{year}</span>
          <span className='flex items-center gap-1 text-yellow-400'>
            <Star size={13} fill='currentColor' /> {rating.toFixed(1)}
          </span>
        </div>
        <p className='mt-1 text-xs text-gray-500'>{genres.join(' • ')}</p>
      </Link>

      <TrailerModal isOpen={isTrailerOpen} onClose={() => setIsTrailerOpen(false)} title={title} trailerId={movie.trailerId} />
    </article>
  )
}

export default MovieCard