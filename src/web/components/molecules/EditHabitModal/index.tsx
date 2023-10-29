'use client'

import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { CardProps } from '@/components/molecules/HabitCard'
import { Input } from '@/components/molecules/Input'
import { updateHabitById } from '@/services/controllers/user'
import { useState } from 'react'
import styles from './styles.module.scss'
import { Habit } from '@/components/organisms/HabitsWrapper'

interface EditHabitModalProps {
  show: boolean
  onHide: () => void
  habit: EditableHabit
  habitId: string
  token: string
}

export interface EditableHabit {
  title: string
  description: string
}

export const EditHabitModal = ({
  show,
  onHide,
  habit,
  habitId,
  token,
}: EditHabitModalProps) => {
  const [title, setTitle] = useState<string>(habit.title);
  const [description, setDescription] = useState<string>(habit.description);

  const handleSaveWrapper = async () => {
    try {
      const updateHabitPayload = { title, description };
      await updateHabitById(habitId, updateHabitPayload, token)
      onHide()
    } catch (error) {
      console.error('Erro ao atualizar hábito no banco de dados:', error)
    }
  }

  return (
    <div className={styles.modal} style={{ display: show ? 'block' : 'none' }}>
      <div className={styles.modal__content}>
        <button
          aria-label='Fechar modal'
          onClick={onHide}
          className={styles.modal__closeButton}
        >
          <Icon icon='x' />
        </button>
        <form>
          <Input
            id='title'
            label='Hábito'
            placeholder=''
            placeholderColor='white'
            type='text'
            value={title || ''}
            onChange={(e) => {
              let currentValue = e.target.value
              setTitle(currentValue)
            }}
            icon='pencil'
          />
          <Input
            id='description'
            label='Descrição'
            placeholder=''
            placeholderColor='white'
            type='text'
            value={description || ''}
            onChange={(e) => {
              let currentValue = e.target.value
              setDescription(currentValue)
            }}
            icon='pencil'
          />
        </form>
        <Button
          onClick={(e) => {
            e.preventDefault()
            handleSaveWrapper()
          }}
          label='Salvar alterações'
          level='primary'
        />
      </div>
    </div>
  )
}
