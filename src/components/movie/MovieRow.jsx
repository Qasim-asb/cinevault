import MovieCard from './MovieCard'

const MovieRow = ({ title, movies }) => {
  return (
    <section className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-white'>{title}</h2>
        <button className='text-sm font-medium text-red-500 transition hover:text-red-400'>View all</button>
      </div>

      <div className='flex gap-4 overflow-x-auto pb-4 scrollbar-hide'>
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  )
}

export default MovieRow