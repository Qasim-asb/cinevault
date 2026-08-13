import { ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-black px-4 pt-16 text-center'>
      <div>
        <p className='text-7xl font-black text-red-500'>404</p>
        <h1 className='mt-4 text-3xl font-bold text-white'>Page not found</h1>
        <p className='mt-3 max-w-md text-gray-500'>The page you're looking for doesn't exist or may have been moved.</p>
        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          <Link to='/' replace className='flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200'>
            <Home size={17} /> Go Home
          </Link>

          <Link to='/movies' className='flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20'>
            <ArrowLeft size={17} /> Browse Movies
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound