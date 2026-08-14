import api from '../lib/axios'

export const signup = async userData => {
  const { data } = await api.post('/auth/signup', userData)

  return data.data
}

export const login = async credentials => {
  const { data } = await api.post('/auth/login', credentials)

  return data.data
}

export const getCurrentUser = async () => {
  const { data } = await api.get('/auth/me')

  return data.data
}