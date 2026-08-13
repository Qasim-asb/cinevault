import { useQuery } from '@tanstack/react-query'
import { getMovieById } from '../services/movieService'

const useMovie = id => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id),
    enabled: Boolean(id),
  })
}

export default useMovie