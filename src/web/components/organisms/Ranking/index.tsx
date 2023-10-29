'use client'

import { Heading } from '@/components/atoms/Heading'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { HabitCard } from '@/components/molecules/HabitCard'
import { getAllHabits } from '@/services/controllers/user'
import { useEffect, useState } from 'react'
import { Habit } from '../HabitsWrapper'
import styles from './styles.module.scss'

export const Ranking = () => {
  const isLocalStorageAvailable = typeof window !== 'undefined'
  const [userHabits, setUserHabits] = useState<Habit[]>([])
  const [isLoading, setLoading] = useState(true)

  let userToken: string | null = null

  if (isLocalStorageAvailable) {
    userToken = localStorage.getItem('token')
  }

  const getHabitsFromDatabase = async (token: string) => {
    try {
      return await getAllHabits(token)
    } catch (error) {
      console.error('Erro ao obter hábitos do banco de dados', error)
      throw error
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUserHabits = await getHabitsFromDatabase(userToken || '')

        if (!fetchedUserHabits) {
          setLoading(false)
          return
        }

        setUserHabits(fetchedUserHabits)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao renderizar ranking', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [userToken])

  if (isLoading) {
    return (
      <div className={styles.loadingMessage}>
        <Text align='center' children='Carregando...' color='black' />
      </div>
    )
  }

  const categoryCounts = userHabits.reduce(
    (counts: { [x: string]: any }, habit: { category: any }) => {
      const { category } = habit
      counts[category] = (counts[category] || 0) + 1
      return counts
    },
    {}
  )

  const sortedPopularCategories = Object.keys(categoryCounts).sort(
    (a, b) => categoryCounts[b] - categoryCounts[a]
  )

  const mostPopularCategory = sortedPopularCategories[0]
  const sortedLeastPopularCategories = sortedPopularCategories.slice(1)

  return (
    <section className={styles.ranking}>
      <article className={styles.ranking__container}>
        <div className={styles.ranking__textContainer}>
          <div className={styles.ranking__heading}>
            <Heading
              align='left'
              children='Ranking +'
              color='black'
              level='4'
            />
            <Icon icon='trophy' />
          </div>

          <Text
            align='left'
            children='Estas são as categorias mais populares em seus hábitos adicionados'
            color='black'
          />
        </div>

        <div className={styles.ranking__cardsContainer}>
          {userHabits
            .filter(
              (habit: { category: string }) =>
                habit.category === mostPopularCategory
            )
            .slice(0, 2)
            .map((habit: Habit) => (
              <HabitCard
                key={habit._id}
                habitId={habit._id}
                title={habit.title}
                description={habit.description}
                category={habit.category}
                setUserHabits={setUserHabits}
                token={userToken || ''}
              />
            ))}
        </div>
      </article>

      <article className={styles.ranking__secondContainer}>
        <div className={styles.ranking__textContainer}>
          <div className={styles.ranking__heading}>
            <Heading
              align='left'
              children='Ranking -'
              color='black'
              level='4'
            />
            <Icon icon='repeat' />
          </div>
          <Text
            align='left'
            children='Estas são as categorias menos adicionadas em sua lista de hábitos'
            color='black'
          />
        </div>

        <div className={styles.ranking__cardsContainer}>
          {userHabits
            .filter((habit: { category: string }) =>
              sortedLeastPopularCategories.includes(habit.category)
            )
            .slice(0, 2)
            .map((habit: Habit) => (
              <HabitCard
                key={habit._id}
                habitId={habit._id}
                title={habit.title}
                description={habit.description}
                category={habit.category}
                setUserHabits={setUserHabits}
                token={userToken || ''}
              />
            ))}
        </div>
      </article>
    </section>
  )
}
