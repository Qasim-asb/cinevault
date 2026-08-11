import MovieRow from '../components/movie/MovieRow'
import { movies } from '../data/movies'

const Movies = () => {
  return (
    <main className='min-h-screen bg-black px-4 pb-16 pt-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10'>
          <h1 className='text-3xl font-bold text-white'>Movies</h1>
          <p className='mt-2 text-gray-400'>Explore movies you'll love.</p>
        </div>

        <MovieRow title='All Movies' movies={movies} />
      </div>
    </main>
  )
}

export default Movies