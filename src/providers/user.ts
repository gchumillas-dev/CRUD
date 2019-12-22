import axios from 'axios'
import { API_URL } from '../env'

export const login = async (username: string, password: string): Promise<string> => {
  const url = [API_URL, '/login'].join('')
  const res = await axios.post(url, {
    username,
    password
  })

  return res.data
}