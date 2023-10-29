'use client'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { HabitCard } from '@/components/molecules/HabitCard'
import { NewHabitModal } from '@/components/molecules/NewHabitModal'
import habits from '@/data/habits.json'
import { getAllHabits, saveHabitToDatabase } from '@/services/controllers/user'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export interface Habit {
  _id: string
  title: string
  description: string
  category: string
}

export const HabitsWrapper = () => {
  const [userHabits, setUserHabits] = useState<Habit[]>([])
  const [isMobileModalOpen, setMobileModalOpen] = useState(false)
  const [isDesktopModalOpen, setDesktopModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const pathname = usePathname()

  const isLocalStorageAvailable = typeof window !== 'undefined'

  let token: string = ''

  if (isLocalStorageAvailable) {
    const retrievedToken = localStorage.getItem('token')
    if (retrievedToken) {
      token = retrievedToken
    }
  }

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

  const addNewHabit = async (newHabit: Habit) => {
    try {
      setUserHabits([...userHabits, newHabit])

      if (token) {
        await saveHabitToDatabase(newHabit, token)

        const updatedUserHabits = await getAllHabits(token)
        setUserHabits(updatedUserHabits)
      }
    } catch (error) {
      console.error(
        'Erro ao adotar o hábito ou obter hábitos atualizados',
        error
      )
    }
  }

  useEffect(() => {
    if (token) {
      const fetchHabits = async () => {
        const updatedUserHabits = await getAllHabits(token)
        setUserHabits(updatedUserHabits)
      }
      fetchHabits()
    }
  }, [])

  const filterByCategory = (category: string) => {
    setSelectedCategory(category)
  }

  const clearCategoryFilter = () => {
    setSelectedCategory(null)
  }

  const isButton = pathname === '/' ? false : true
  const buttonLabel = pathname === '/' ? 'Meus hábitos' : 'Novo hábito'
  const initialItemsSlice = isDesktopModalOpen ? 0 : 2

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
            label={buttonLabel}
            level='primary'
            isButton={isButton}
            onClick={isButton ? handleOpenDesktopModal : undefined}
            href='/habits'
          />

          {pathname !== '/' && (
            <Button
              label='Limpar filtro'
              level='secondary'
              isButton={true}
              onClick={() => clearCategoryFilter()}
              className={styles.wrapper__buttonDesktop}
            />
          )}
        </div>

        {pathname === '/' && (
          <div className={styles.wrapper__initialItems}>
            <HabitCard
              habitId=''
              title='Usar bicicleta para ir ao trabalho'
              description='Optar por usar a bicicleta ajuda a reduzir a emissão de poluentes e o tráfego nas ruas'
              category='Transporte'
              setUserHabits={setUserHabits}
              token=''
            />
            <HabitCard
              habitId=''
              title='Reduzir o desperdício de água em casa'
              description='Não esquecer de fechar a torneira durante o escovar dos dentes'
              category='Consumo sustentável'
              setUserHabits={setUserHabits}
              token=''
            />
          </div>
        )}

        {pathname !== '/' && (
          <div
            className={`${styles.wrapper__initialItems} ${
              isDesktopModalOpen ? styles.wrapper__initialItemsOpen : styles.wrapper__initialItemsClosed
            }`}
          >
            {habits
              .slice(0, initialItemsSlice)
              .filter(
                (item) =>
                  !selectedCategory || item.category === selectedCategory
              )
              .map((item, index) => (
                <HabitCard
                  key={index}
                  image='/card.png'
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  habitId={item._id.$oid}
                  setUserHabits={setUserHabits}
                  token={token}
                  filterByCategory={filterByCategory}
                />
              ))}
            {isDesktopModalOpen && (
              <NewHabitModal
                onClose={handleCloseDesktopModal}
                addHabit={addNewHabit}
              />
            )}
          </div>
        )}

        {pathname !== '/' && (
          <div className={styles.wrapper__additionalItems}>
            {habits
              .slice(2, 11)
              .filter(
                (item) =>
                  !selectedCategory || item.category === selectedCategory
              )
              .map((item, index) => (
                <HabitCard
                  key={index}
                  image='/card.png'
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  habitId={item._id.$oid}
                  setUserHabits={setUserHabits}
                  token={token}
                  filterByCategory={filterByCategory}
                />
              ))}
          </div>
        )}

        <Button
          className={styles.wrapper__buttonMobile}
          label={buttonLabel}
          level='primary'
          isButton={isButton}
          onClick={isButton ? handleOpenMobileModal : undefined}
          href='/habits'
        />
        {isMobileModalOpen && (
          <div className={styles.goals__modal}>
            <NewHabitModal
              onClose={handleCloseMobileModal}
              addHabit={addNewHabit}
            />
          </div>
        )}

        {pathname !== '/' && (
          <Button
            label='Limpar filtro'
            level='secondary'
            isButton={true}
            onClick={() => clearCategoryFilter()}
            className={styles.wrapper__buttonMobile}
          />
        )}
      </section>

      {pathname !== '/' && userHabits.length !== 0 && (
        <section className={styles.myHabits}>
          <Heading
            align='center'
            children='Meus hábitos'
            color='black'
            level='3'
          />

          <div className={styles.myHabits__container}>
            {userHabits
              .filter(
                (habit) =>
                  !selectedCategory || habit.category === selectedCategory
              )
              .map((habit, index) => (
                <HabitCard
                  key={index}
                  image='/card.png'
                  title={habit.title}
                  description={habit.description}
                  category={habit.category}
                  habitId={habit._id}
                  setUserHabits={setUserHabits}
                  token={token}
                  filterByCategory={filterByCategory || (() => {})}
                />
              ))}
          </div>
        </section>
      )}
    </>
  )
}
