import axios, { AxiosResponse } from 'axios'
import environments from '~/utils/environments'

// ======================================================
// REST

const api = axios.create({
  baseURL: environments.API_BASE_URL
})

export const get: <T>(
  path: string,
  params?: object
) => Promise<AxiosResponse<T>> = async (path, params) => {
  const res = await api.get(path, { params })
  return res
}

export const post: <T>(
  path: string,
  data?: object
) => Promise<AxiosResponse<T>> = async (path, data) => {
  const res = await api.get(path, data)
  return res
}
