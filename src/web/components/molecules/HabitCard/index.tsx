'use client'

import { Button } from '@/components/atoms/Button'
import { Tag } from '@/components/atoms/Tag'
import { EditHabitModal } from '@/components/molecules/EditHabitModal'
import { Habit } from '@/components/organisms/HabitsWrapper'
import {
  deleteHabitById,
  getAllHabits,
  saveHabitToDatabase,
} from '@/services/controllers/user'
import { usePathname } from 'next/navigation'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from './styles.module.scss'

import { removeAccentsAndSpaces } from '@/utils/removeAccentsAndSpaces'

export interface CardProps {
  image?: string
  title: string
  description: string
  category?: string
  habitId: string
  onDelete?: (habitId: string) => void
  token: string
  setUserHabits: Dispatch<SetStateAction<Habit[]>>
  filterByCategory?: (category: string) => void
  isSuggestedHabit: boolean
}

export const HabitCard = ({
  title,
  description,
  category,
  habitId,
  token,
  setUserHabits,
  filterByCategory,
  isSuggestedHabit,
}: CardProps) => {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)
  const [isTabFocused, setIsTabFocused] = useState(false)
  const [isEditModalVisible, setEditModalVisible] = useState(false)

  const handleAddSuggestedHabit = async () => {
    try {
      if (token) {
        const newHabit = { title, description, category }
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

  const handleDeleteClick = async (habitId: string) => {
    if (token) {
      try {
        await deleteHabitById(habitId, token)
        const updatedUserHabits = await getAllHabits(token)
        setUserHabits(updatedUserHabits)
      } catch (error) {
        console.error('Erro ao excluir hábito do banco de dados:', error)
      }
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      setIsTabFocused(true)
    }
  }

  const handleMouseEnter = () => {
    if (!isTabFocused) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)

    if (isEditModalVisible) {
      setEditModalVisible(false)
    }
  }

  const handleEditClick = async () => {
    setEditModalVisible(true)
  }

  const renderTitle = () =>
    isHovered || isTabFocused ? null : (
      <>
        <div className={styles.card__content}>
          <Tag category={category} backgroundColor='dark-green' />
        </div>
        <p className={styles.card__title}>{title}</p>
      </>
    )

  const renderContent = () => {
    if (pathname === '/' || pathname === '/goals') {
      return isHovered || isTabFocused ? (
        <div className={styles.card__hoverButton}>
          <Button
            label='Veja todos os hábitos'
            level='primary'
            href='/habits'
            isButton={false}
          />
        </div>
      ) : null
    }

    return isHovered || isTabFocused ? (
      <>
        <div className={styles.card__buttons}>
          <button
            className={styles.card__button}
            onClick={() => {
              console.log('Botão Clicado!')
              filterByCategory && category && filterByCategory(category)
            }}
          >
            <Tag category={category} backgroundColor='dark-green' />
          </button>
          {isSuggestedHabit ? (
            <></>
          ) : (
            <Button
              hasIcon={true}
              icon='pencil'
              level='primary'
              size='small'
              aria='Editar hábito'
              onClick={handleEditClick}
            />
          )}
        </div>

        <p className={styles.card__text}>{description}</p>

        {isSuggestedHabit ? (
          <Button
            label='Adicionar hábito'
            level='primary'
            hasIcon
            icon='check-01'
            onClick={async () => await handleAddSuggestedHabit()}
            className={styles.card__addHabit}
          />
        ) : (
          <Button
            label='Remover hábito'
            level='tertiary'
            hasIcon
            icon='trash'
            onClick={async () => await handleDeleteClick(habitId)}
            className={styles.card__removeHabit}
          />
        )}
      </>
    ) : null
  }

  function getImageForCategory(category: string | undefined): string {
    if (category) {
      const normalizedCategory = removeAccentsAndSpaces(category)
      const categoryImages: Record<string, string> = {
        consumosustentavel: './cards/consumosustentavel.png',
        energia: './cards/energia.png',
        reciclagem: './cards/reciclagem.png',
        agua: './cards/agua.png',
        transporte: './cards/transporte.png',
        alimentacao: './cards/alimentacao.png',
        conservacao: './cards/conservacao.png',
        conscientizacao: './cards/conscientizacao.png',
      }

      if (categoryImages.hasOwnProperty(normalizedCategory)) {
        return categoryImages[normalizedCategory]
      }
    }

    return './cards/default.png'
  }

  const background = {
    backgroundImage:
      isHovered || isTabFocused
        ? 'none'
        : `url(${getImageForCategory(removeAccentsAndSpaces(category))})`,
  }

  return (
    <>
      <article
        className={`${styles.card} ${
          isHovered || isTabFocused ? styles.hovered : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsTabFocused(true)}
        onBlur={() => setIsTabFocused(false)}
        style={background}
        tabIndex={0}
      >
        {renderTitle()}
        {renderContent()}

        {isEditModalVisible && (
          <EditHabitModal
            show={isEditModalVisible}
            onHide={() => setEditModalVisible(false)}
            habit={{ title, description }}
            habitId={habitId}
            token={token}
            setUserHabits={setUserHabits}
            setIsHovered={setIsHovered}
            setIsTabFocused={setIsTabFocused}
          />
        )}
      </article>
    </>
  )
}
