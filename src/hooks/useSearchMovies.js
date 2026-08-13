import { useQuery } from '@tanstack/react-query'
import { searchMovies } from '../services/movieService'

const useSearchMovies = query => {
  return useQuery({
    queryKey: ['movies', 'search', query],
    queryFn: () => searchMovies(query),
    enabled: Boolean(query.trim()),
  })
}

export default useSearchMovies