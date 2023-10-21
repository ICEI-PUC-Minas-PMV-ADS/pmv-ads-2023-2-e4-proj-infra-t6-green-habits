'use client'

import { Button } from '@/components/atoms/Button'
import { Tag } from '@/components/atoms/Tag'
import axios from 'axios'
import { useState } from 'react'
import { HabitModal } from '../HabitModal'
import styles from './styles.module.scss'

export interface CardProps {
  image?: string
  title?: string
  description?: string
  category?: string
  habitId: string
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
    const updatedToken =
      ''

    try {
      const response = await updateHabitInDatabase(
        updatedHabit,
        habitId,
        updatedToken
      )

      if (response.status === 200) {
        if (onDelete) {
          onDelete(habitId)
        }
      } else {
        console.error('Erro ao atualizar hábito.')
      }
    } catch (error) {
      console.error('Erro ao atualizar hábito: ', error)
    }
  }

  const handleDeleteClick = () => {
    const deleteToken =
      ''
    deleteHabitFromDatabase(habitId, deleteToken)
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
          label='Adicionar Hábito'
          level='primary'
          hasIcon
          icon='check-01'
        />
        <Button
          label='Remover Hábito'
          level='tertiary'
          hasIcon
          icon='trash'
          onClick={handleDeleteClick}
        />
      </>
    ) : null
  }

  const background = {
    backgroundImage: isHovered || isTabFocused ? 'none' : `url(${image})`,
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
