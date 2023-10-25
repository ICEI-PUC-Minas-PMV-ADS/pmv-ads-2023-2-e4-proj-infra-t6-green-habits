'use client'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { HabitCard } from '@/components/molecules/HabitCard'
import { NewHabitModal } from '@/components/molecules/NewHabitModal'
import axios from 'axios'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export interface Habit {
  habitId: string
  image?: string
  title?: string
  description?: string
  category?: string
}

export const HabitsWrapper = () => {
  const [userHabits, setUserHabits] = useState<Habit[]>([])
  const [isMobileModalOpen, setMobileModalOpen] = useState(false)
  const [isDesktopModalOpen, setDesktopModalOpen] = useState(false)
  const pathname = usePathname()

  const handleOpenMobileModal = () => {
    setMobileModalOpen(true)
  }

  const handleCloseMobileModal = () => {
    setMobileModalOpen(false)
  }

  const handleOpenDesktopModal = () => {
    setDesktopModalOpen(true)
  }

  const handleCloseDesktopModal = () => {
    setDesktopModalOpen(false)
  }

  useEffect(() => {
    async function fetchUserHabits() {
      try {
        const token =
          ''

        const response = await axios.get(
          'https://habit-tracker-api.fly.dev/habit',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        const newHabitData: Habit[] = response.data
        setUserHabits(newHabitData)
      } catch (error) {
        console.log('Erro ao buscar hábitos: ', error)
      }
    }

    fetchUserHabits()
  }, [])

  return (
    <>
      <section className={styles.wrapper} id='habitsWrapper'>
        <div className={styles.wrapper__heading}>
          <Heading align='left' children='Hábitos' color='black' level='2' />
          <Text
            align='left'
            children='Confira nossa seleção de hábitos para o seu dia a dia'
            color='black'
          />

          <Button
            className={styles.wrapper__buttonDesktop}
            label={pathname === '/' ? 'Meus hábitos' : 'Novo hábito'}
            level='primary'
            isButton={pathname === '/' ? true : false}
            onClick={handleOpenDesktopModal}
          />
          {isDesktopModalOpen && (
            <NewHabitModal onClose={handleCloseDesktopModal} />
          )}
        </div>

        {pathname === '/' && (
          <div className={styles.wrapper__initialItems}>
            <HabitCard
              habitId=''
              title='Usar bicicleta para ir ao trabalho'
              description='Optar por usar a bicicleta ajuda a reduzir a emissão de poluentes e o tráfego nas ruas'
              category='Transporte'
            />
            <HabitCard
              habitId=''
              title='Reduzir o desperdício de água em casa'
              description='Não esquecer de fechar a torneira durante o escovar dos dentes'
              category='Consumo sustentável'
            />
          </div>
        )}

        <div className={styles.wrapper__initialItems}>
          {/* {habitsData.slice(0, 2).map((item, index) => (
            <HabitCard
              key={index}
              image='/card.png'
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))} */}
        </div>

        {pathname !== '/' && (
          <div className={styles.wrapper__additionalItems}>
            {/* {habitsData.slice(2).map((item, index) => (
              <HabitCard
                key={index}
                image='/card.png'
                title={item.title}
                description={item.description}
                category={item.category}
              />
            ))} */}
          </div>
        )}

        <Button
          className={styles.wrapper__buttonMobile}
          label={pathname === '/' ? 'Meus hábitos' : 'Novo hábito'}
          level='primary'
          isButton={pathname === '/' ? true : false}
          onClick={handleOpenMobileModal}
        />
        {isMobileModalOpen && (
          <div className={styles.goals__modal}>
            <NewHabitModal onClose={handleCloseMobileModal} />
          </div>
        )}
      </section>

      {pathname !== '/' && (
        <section className={styles.myHabits}>
          <Heading
            align='center'
            children='Meus hábitos'
            color='black'
            level='3'
          />

          <div className={styles.myHabits__container}>
            {userHabits.map((item, index) => (
              <HabitCard
                key={index}
                image='/card.png'
                title={item.title}
                description={item.description}
                category={item.category}
                habitId={item.habitId}
              />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
