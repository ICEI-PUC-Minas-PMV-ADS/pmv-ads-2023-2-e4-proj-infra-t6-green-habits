import axios from 'axios'
axios.defaults.timeout = 30000

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_HOST || 'https://habit-tracker-api.fly.dev/',
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

interface UpdateHabitPayload {
  title: string
  description: string
}

export interface CreateHabitPayload {
  title: string
  description: string
  category?: string
}

export interface ApiHabit {
  title: string
  description: string
  category: string
  _id: string
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

interface AddGoalPayload {
  title: string
}

interface UpdateGoalPayload {
  title?: string;
  completed?: boolean;
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

export const saveHabitToDatabase = async (newHabit: CreateHabitPayload, token?: string) => {
  try {
    let options = formatHeader(token)
    const { data } = await instance.post<ApiHabit>(`/habit/`, newHabit, options)
    return data
  } catch (error) {
    console.error('Erro ao salvar o hábito no banco de dados', error)
    throw error
  }
}

export const deleteHabitById = async (habitId: string, token?: string) => {
  try {
    let options = formatHeader(token)
    await instance.delete(`/habit/${habitId}`, options)
  } catch (error) {
    console.error('Erro ao excluir hábito do banco de dados:', error)
    throw error
  }
}

export const updateHabitById = async (habitId: string, updatePayload: UpdateHabitPayload, token?: string) => {
  try {
    let header = formatHeader(token)
    const response = await instance.patch(`/habit/${habitId}`, updatePayload, header)
    console.log(response)
  } catch (error) {
    console.log('Erro ao atualizar hábito do banco de dados:', error)
    throw error
  }
}

export const getAllGoals = async (token?: string) => {
  try {
    let options = formatHeader(token)
    const { data } = await instance.get(`/goal/`, options)
    return data
  } catch (error) {
    console.error('Erro ao buscar as metas do banco de dados', error)
    throw error
  }
}

export const saveGoalToDatabase = async (token: string | undefined, payload: AddGoalPayload) => {
  try {
    let options = formatHeader(token)
    const { data } = await instance.post(`/goal/`, payload, options)
    return data
  } catch (error) {
    console.error('Erro ao salvar a meta no banco de dados', error)
    throw error
  }
}

export const deleteGoalById = async (id?: string, token?: string) => {
  try {
    let options = formatHeader(token)
    const response = await instance.delete(`/goal/${id}`, options)
    console.log(response)
    return response
  } catch (error) {
    console.error('Erro ao excluir meta do banco de dados:', error)
    throw error
  }
}

export const updateGoalById = async (id: string | undefined, token: string | undefined, payload: UpdateGoalPayload) => {
  try {
    let options = formatHeader(token);
    const response = await instance.patch(`/goal/${id}`, payload, options);
    console.log(response);
  } catch (error) {
    console.log('Erro ao atualizar meta no banco de dados:', error);
    throw error;
  }
}

export async function loginUser(payload: LoginUserPayload) {
  try {
    const {
      data: { token },
    } = await instance.post<{ token: string }>('/login', payload)
    return token
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
