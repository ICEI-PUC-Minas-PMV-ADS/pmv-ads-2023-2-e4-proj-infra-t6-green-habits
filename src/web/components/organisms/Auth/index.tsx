'use client'

import { Habit } from '@/components/organisms/HabitsWrapper'
import { getAllHabits } from '@/services/controllers/user'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

interface AuthProps {
  children: ReactNode
  token: string
}

export const Auth = ({ children, token }: AuthProps) => {
  const router = useRouter()
  const [userHabits, setUserHabits] = useState<Habit[]>([])

  useEffect(() => {
    async function fetchUserHabits() {
      try {
        if (token) {
          const habits = await getAllHabits(token)
          console.log(habits)
          setUserHabits(habits)
        }
      } catch (error) {
        console.log('Erro ao buscar hábitos: ', error)
      }
    }

    fetchUserHabits()
  }, [token])

  useEffect(() => {
    if (!token) {
      router.push('/')
    }
  }, [token])

  return children
}
