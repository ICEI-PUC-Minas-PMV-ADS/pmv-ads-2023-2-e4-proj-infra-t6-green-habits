'use client'

import { Button } from '@/components/atoms/Button'
import { Tag } from '@/components/atoms/Tag'
import axios from 'axios'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HabitModal } from '../HabitModal'
import styles from './styles.module.scss'

export interface CardProps {
  image?: string
  title?: string
  description?: string
  category?: string
  habitId: string | { $oid: string }
  onDelete?: (habitId: string) => void
  token?: string | undefined
}

export const HabitCard = ({
  image,
  title,
  description,
  category,
  habitId,
  onDelete,
  token,
}: CardProps) => {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)
  const [isTabFocused, setIsTabFocused] = useState(false)
  const [isEditModalVisible, setEditModalVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [editedHabit, setEditedHabit] = useState<CardProps>({
    image,
    title,
    description,
    category,
    habitId,
  })

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

  const handleEditClick = () => {
    setEditModalVisible(true)
  }

  const handleEditModalClose = async (updatedHabit: CardProps) => {
    const updatedToken = ''

    const habitIdAsString = typeof habitId === 'string' ? habitId : habitId.$oid

    try {
      const response = await updateHabitInDatabase(
        updatedHabit,
        habitIdAsString,
        updatedToken
      )

      if (response.status === 200) {
        if (onDelete) {
          onDelete(habitIdAsString)
        }
      } else {
        console.error('Erro ao atualizar hábito.')
      }
    } catch (error) {
      console.error('Erro ao atualizar hábito: ', error)
    }
  }

  const handleDeleteClick = () => {
    const deleteToken = ''
    const habitIdAsString = typeof habitId === 'string' ? habitId : habitId.$oid

    deleteHabitFromDatabase(habitIdAsString, deleteToken)
  }

  const renderTitle = () =>
    isHovered || isTabFocused ? null : (
      <>
        <div className={styles.card__content}>
          <Tag category={category} backgroundColor='dark-green' />
        </div>
        <p className={styles.card__title}>{editedHabit.title}</p>
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
        <div className={styles.card__button}>
          <Button
            hasIcon={true}
            icon='pencil'
            level='primary'
            size='small'
            aria='Editar hábito'
            onClick={handleEditClick}
          />
        </div>

        <p className={styles.card__text}>{editedHabit.description}</p>

        <Button
          label='Adicionar hábito'
          level='primary'
          hasIcon
          icon='check-01'
        />
        <Button
          label='Remover hábito'
          level='tertiary'
          hasIcon
          icon='trash'
          onClick={handleDeleteClick}
          className={styles.card__removeHabit}
        />
      </>
    ) : null
  }

  function removeAccentsAndSpaces(text: string | undefined) {
    if (!text) {
      return ''
    }
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s/g, '')
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
          <HabitModal
            show={isEditModalVisible}
            onHide={() => setEditModalVisible(false)}
            habit={editedHabit}
            onSave={handleEditModalClose}
          />
        )}
      </article>
    </>
  )
}

const updateHabitInDatabase = async (
  updatedHabit: CardProps,
  habitId: string,
  token: string
) => {
  return await axios.patch(
    `https://habit-tracker-api.fly.dev/habit/${habitId}`,
    updatedHabit,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

const deleteHabitFromDatabase = async (habitId: string, token: string) => {
  try {
    const response = await axios.delete(
      `https://habit-tracker-api.fly.dev/habit/${habitId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    if (response.status === 200) {
    } else {
      console.error('Erro ao excluir hábito.')
    }
  } catch (error) {
    console.error('Erro ao excluir hábito: ', error)
  }
}
