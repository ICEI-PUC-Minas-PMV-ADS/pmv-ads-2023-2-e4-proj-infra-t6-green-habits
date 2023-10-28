'use client'

import { Button } from '@/components/atoms/Button'
import { Tag } from '@/components/atoms/Tag'
import { EditHabitModal } from '@/components/molecules/EditHabitModal'
import { updateHabitById } from '@/services/controllers/user'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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

  const handleEditClick = async () => {
    setEditModalVisible(true)
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
          onClick={() => {
            if (typeof habitId === 'string') {
              onDelete && onDelete(habitId)
            } else if (typeof habitId === 'object' && '$oid' in habitId) {
              onDelete && onDelete(habitId.$oid)
            }
          }}
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
          <EditHabitModal
            show={isEditModalVisible}
            onHide={() => setEditModalVisible(false)}
            habit={editedHabit}
            onSave={async (editedHabit, token) => {
              try {
                const habitIdString =
                  typeof habitId === 'string' ? habitId : habitId.$oid
                await updateHabitById(habitIdString, token)
                setEditModalVisible(false)
              } catch (error) {
                console.error(
                  'Erro ao atualizar hábito no banco de dados:',
                  error
                )
              }
            }}
            habitId={habitId}
            token={token}
          />
        )}
      </article>
    </>
  )
}
