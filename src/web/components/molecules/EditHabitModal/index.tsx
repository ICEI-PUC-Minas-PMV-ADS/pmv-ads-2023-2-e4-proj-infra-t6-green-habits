'use client'

import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { CardProps } from '@/components/molecules/HabitCard'
import { Input } from '@/components/molecules/Input'
import { updateHabitById } from '@/services/controllers/user'
import { useState } from 'react'
import styles from './styles.module.scss'

interface EditHabitModalProps {
  show: boolean
  onHide: () => void
  onSave: (editedHabit: CardProps, token: string | undefined) => void
  habit: CardProps
  habitId: string | { $oid: string }
  token?: string | undefined
}

export const EditHabitModal = ({
  show,
  onHide,
  onSave,
  habit,
  habitId,
  token,
}: EditHabitModalProps) => {
  const [updateHabit, setUpdatedHabit] = useState<CardProps>(habit)

  const handleSaveWrapper = async () => {
    try {
      const habitIdString = typeof habitId === 'string' ? habitId : habitId.$oid
      await updateHabitById(habitIdString, token)
      onSave(updateHabit, token)
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
            value={updateHabit.title || ''}
            onChange={(e) =>
              setUpdatedHabit({ ...updateHabit, title: e.target.value })
            }
            icon='pencil'
          />
          <Input
            id='description'
            label='Descrição'
            placeholder=''
            placeholderColor='white'
            type='text'
            value={updateHabit.description || ''}
            onChange={(e) =>
              setUpdatedHabit({ ...updateHabit, description: e.target.value })
            }
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
