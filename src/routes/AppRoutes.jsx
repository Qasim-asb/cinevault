import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import MovieDetails from '../pages/MovieDetails'
import Search from '../pages/Search'
import Watchlist from '../pages/Watchlist'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/movies/:id' element={<MovieDetails />} />
      <Route path='/search' element={<Search />} />
      <Route path='/watchlist' element={<Watchlist />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default AppRoutes