import { useQuery } from '@tanstack/react-query'
import { getMovies } from '../services/movieService'

const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
  })
}

export default useMovies