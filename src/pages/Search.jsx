import { Search as SearchIcon, X } from 'lucide-react'
import { useState } from 'react'
import MovieCard from '../components/movie/MovieCard'
import useDebounce from '../hooks/useDebounce'
import useSearchMovies from '../hooks/useSearchMovies'

const Search = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query)

  const { data: movies = [], isLoading, isError } = useSearchMovies(debouncedQuery)

  const clearSearch = () => {
    setQuery('')
  }

  return (
    <main className='min-h-screen bg-black px-4 pb-16 pt-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-2xl'>
          <h1 className='text-3xl font-bold text-white'>Search Movies</h1>
          <p className='mt-2 text-gray-400'>Find your next movie.</p>

          <div className='relative mt-6'>
            <SearchIcon size={20} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500' />

            <input type='text' value={query} onChange={e => setQuery(e.target.value)} placeholder='Search movies...' className='w-full rounded-xl border border-white/10 bg-zinc-900 py-4 pl-12 pr-12 text-white outline-none transition placeholder:text-gray-600 focus:border-red-500' />

            {query && (
              <button onClick={clearSearch} className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-white' aria-label='Clear search'>
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        <div className='mt-12'>
          {debouncedQuery ? (
            <>
              <div className='mb-6'>
                <h2 className='text-xl font-semibold text-white'>Search results</h2>
                {!isLoading && !isError && (
                  <p className='mt-1 text-sm text-gray-500'>
                    {movies.length}{' '}
                    {movies.length === 1 ? 'movie' : 'movies'}{' '}
                    found
                  </p>
                )}
              </div>

              {isLoading ? (
                <div className='py-16 text-center'>
                  <p className='text-gray-400'>Searching movies...</p>
                </div>
              ) : isError ? (
                <div className='rounded-2xl border border-white/10 bg-zinc-950 px-6 py-16 text-center'>
                  <SearchIcon size={40} className='mx-auto text-gray-700' />
                  <h2 className='mt-5 text-xl font-semibold text-white'>Search failed</h2>
                  <p className='mt-2 text-gray-500'>Unable to search movies. Please try again.</p>
                </div>
              ) : movies.length > 0 ? (
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                  {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                </div>
              ) : (
                <div className='rounded-2xl border border-white/10 bg-zinc-950 px-6 py-16 text-center'>
                  <SearchIcon size={40} className='mx-auto text-gray-700' />
                  <h2 className='mt-5 text-xl font-semibold text-white'>No movies found</h2>
                  <p className='mt-2 text-gray-500'>Try searching for another movie.</p>
                </div>
              )}
            </>
          ) : (
            <div className='rounded-2xl border border-white/10 bg-zinc-950 px-6 py-16 text-center'>
              <SearchIcon size={40} className='mx-auto text-gray-700' />
              <h2 className='mt-5 text-xl font-semibold text-white'>Start searching</h2>
              <p className='mt-2 text-gray-500'>Enter a movie title above.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Search