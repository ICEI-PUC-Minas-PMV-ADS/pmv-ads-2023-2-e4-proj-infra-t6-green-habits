import { Habit } from '@/components/organisms/HabitsWrapper'
import axios from 'axios'
axios.defaults.timeout = 30000

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
})

interface RequestOptions {
  headers: {
    Authorization?: string
  }
}

export interface ApiResponse<T> {
  status: number
  data: T
}

export interface RegisterUserPayload {
  name: string
  email: string
  password: string
}

interface LoginUserPayload {
  email: string
  password: string
}

interface CreateUserResponse {
  user: {
    name: string
    email: string
    password: string
    habits: []
    _id: string
    __v: number
  }
  token: string
}

const formatHeader = (token?: string): RequestOptions => {
  let auth = token ? `Bearer ${token}` : undefined
  return { headers: { Authorization: auth } }
}

export const getAllHabits = async (token?: string) => {
  try {
    let options = formatHeader(token)
    const { data } = await instance.get(`/habit/`, options)
    return data
  } catch (error) {
    throw error
  }
}

export const saveHabitToDatabase = async (newHabit: Habit, token?: string) => {
  try {
    let options = formatHeader(token)
    const { data } = await instance.post(`/habit/`, newHabit, options)
    return data
  } catch (error) {
    console.error('Erro ao salvar o hábito no banco de dados', error)
    throw error
  }
}

export const deleteHabitById = async (habitId: string, token?: string) => {
  try {
    let options = formatHeader(token)
    const response = await instance.delete(`/habit/${habitId}`, options)
    console.log(response)
    return response
  } catch (error) {
    console.error('Erro ao excluir hábito do banco de dados:', error)
    throw error
  }
}

export const updateHabitById = async (habitId: string, token?: string) => {
  try {
    let options = formatHeader(token)
    const response = await instance.patch(`/habit/${habitId}`, options)
    console.log(response)
  } catch (error) {
    console.log('Erro ao atualizar hábito do banco de dados:', error)
    throw error
  }
}

export async function loginUser(payload: LoginUserPayload) {
  try {
    const {
      data: { token },
    } = await instance.post<{ token: string }>('/login', payload)
    localStorage.setItem('token', token)
  } catch (error) {
    throw error
  }
}

export async function registerUser(payload: RegisterUserPayload) {
  try {
    const {
      data: { token },
    } = await instance.post<CreateUserResponse>('/user/', payload)
    localStorage.setItem('token', token)
  } catch (error) {
    throw error
  }
}

export type { LoginUserPayload }
