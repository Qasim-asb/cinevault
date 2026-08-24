import { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import AuthContext from './AuthContext'
import { getCurrentUser } from '../services/authService'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const token = localStorage.getItem('token')
  const queryClient = useQueryClient()

  const { data: currentUser, isLoading } = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    enabled: Boolean(token),
    retry: false
  })

  const login = data => {
    localStorage.setItem('token', data.token)
    setUser(data.user)
    queryClient.setQueryData(['currentUser'], data.user)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    queryClient.setQueryData(['currentUser'], null)
    queryClient.removeQueries({ queryKey: ['watchlist'] })
  }

  const authenticatedUser = currentUser || user

  return (
    <AuthContext.Provider value={{ user: authenticatedUser, login, logout, isLoading }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider