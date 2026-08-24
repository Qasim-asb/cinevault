import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <main className='flex min-h-screen items-center justify-center bg-black'>
        <p className='text-gray-400'>Loading...</p>
      </main>
    )
  }

  return user ? <Outlet /> : <Navigate to='/login' replace />
}

export default ProtectedRoute