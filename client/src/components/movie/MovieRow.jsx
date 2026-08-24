import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieRow = ({ title, movies, showViewAll = true }) => {
  return (
    <section className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-white'>{title}</h2>
        {showViewAll && (
          <Link to='/movies' className='text-sm font-medium text-red-500 transition hover:text-red-400'>View all</Link>
        )}
      </div>

      <div className='flex gap-4 overflow-x-auto pb-4 scrollbar-hide'>
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  )
}

export default MovieRow