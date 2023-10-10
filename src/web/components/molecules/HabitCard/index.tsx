'use client'
import { Button } from '@/components/atoms/Button'
import { Tag } from '@/components/atoms/Tag'
import { useState } from 'react'
import styles from './styles.module.scss'

interface CardProps {
  image?: string
  title?: string
  description?: string
  category?: string
}

export const HabitCard = ({
  image,
  title,
  description,
  category,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isTabFocused, setIsTabFocused] = useState(false)

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
  }

  const renderTitle = () =>
    isHovered || isTabFocused ? null : (
      <>
        <div className={styles.card__content}>
          <Tag category={category} backgroundColor='green' />
        </div>
        <p className={styles.card__title}>{title}</p>
      </>
    )

  const renderContent = () =>
    isHovered || isTabFocused ? (
      <>
        <div className={styles.card__button}>
          <Button
            hasIcon={true}
            icon='pencil'
            level='primary'
            size='small'
            aria='Editar hábito'
          />
        </div>
        <p className={styles.card__text}>{description}</p>
        <Button label='Adicionar hábito' level='primary' />
        <Button label='Criar meta relacionada' level='secondary' />
      </>
    ) : null

  const background = {
    backgroundImage: isHovered || isTabFocused ? 'none' : `url(${image})`,
  }

  return (
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
    </article>
  )
}
