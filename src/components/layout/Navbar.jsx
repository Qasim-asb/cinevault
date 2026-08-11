import { Search, Menu, Film } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const getNavClass = ({ isActive }) => {
    return `text-sm font-medium transition ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
  }

  return (
    <header className='fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-lg'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <NavLink to='/' className='flex items-center gap-2'>
          <Film className='text-red-500' size={28} />
          <span className='text-xl font-bold tracking-tight text-white'>
            Cine<span className='text-red-500'>Vault</span>
          </span>
        </NavLink>

        <nav className='hidden items-center gap-8 md:flex'>
          <NavLink to='/' className={getNavClass}>Home</NavLink>
          <NavLink to='/movies' className={getNavClass}>Movies</NavLink>
          <NavLink to='/watchlist' className={getNavClass}>Watchlist</NavLink>
        </nav>

        <div className='flex items-center gap-3'>
          <Link to='/search' className='rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-white' aria-label='Search'>
            <Search size={21} />
          </Link>

          <button className='rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden' aria-label='Menu'>
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar