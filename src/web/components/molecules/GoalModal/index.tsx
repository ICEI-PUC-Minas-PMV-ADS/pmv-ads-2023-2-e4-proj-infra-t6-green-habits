'use client'

import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { Input } from '@/components/molecules/Input'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './styles.module.scss'

interface Goal {
  id: string
  goal: string
  isChecked: boolean
}

interface GoalModalProps {
  onClose: () => void
  addNewGoal: (newGoal: Goal) => void
}

export const GoalModal = ({ onClose, addNewGoal }: GoalModalProps) => {
  const [newGoalText, setNewGoalText] = useState('')
  const generateUniqueId = () => uuidv4()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [onClose])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.querySelector(`.${styles.modal}`)
      if (modal && !modal.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [onClose])

  const handleAddGoal = () => {
    if (newGoalText.trim() !== '') {
      const newGoal = {
        id: generateUniqueId(),
        goal: newGoalText,
        isChecked: false,
      }
      addNewGoal(newGoal)
      onClose()
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__closeButton} onClick={onClose}>
        <Icon icon='x' />
      </div>

      <Input
        label='Qual é a sua meta?'
        id='meta'
        placeholder='Reciclar uma vez ao mês'
        type='text'
        icon='pencil'
        isTextarea
        backgroundColor='white'
        color='black'
        value={newGoalText}
        onChange={(e) => setNewGoalText(e.target.value)}
      />

      <div className={styles.modal__interaction}>
        <Button
          label='Adicionar meta'
          level='primary'
          onClick={handleAddGoal}
        />
        <Button label='Fechar' level='tertiary' onClick={onClose} />
      </div>
    </div>
  )
}
