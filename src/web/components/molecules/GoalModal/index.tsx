'use client'

import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { Input } from '@/components/molecules/Input'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

interface GoalModalProps {
  onClose: () => void
  addNewGoal: ({title}: { title: string }) => void
}

export const GoalModal = ({ onClose, addNewGoal }: GoalModalProps) => {
  const [newGoalText, setNewGoalText] = useState('')

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
        onChange={(e) => {
          setNewGoalText(e.target.value)
        }}
      />

      <div className={styles.modal__interaction}>
        <Button
          label='Adicionar meta'
          level='primary'
          onClick={() => {
            addNewGoal({title: newGoalText})
            onClose()
          }}
        />
        <Button label='Fechar' level='tertiary' onClick={onClose} />
      </div>
    </div>
  )
}
