'use client'

import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { CardProps } from '@/components/molecules/HabitCard'
import { Input } from '@/components/molecules/Input'
import { useState } from 'react'
import styles from './styles.module.scss'

interface HabitModalProps {
  show: boolean
  onHide: () => void
  onSave: (editedHabit: CardProps) => void
  habit: CardProps
}

export const HabitModal = ({
  show,
  onHide,
  onSave,
  habit,
}: HabitModalProps) => {
  const [updateHabit, setUpdatedHabit] = useState<CardProps>(habit)

  const handleSave = () => {
    onSave(updateHabit)
    onHide()
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
            placeholder='sadsad'
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
            placeholder='16512'
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
          onClick={handleSave}
          label='Salvar alterações'
          level='primary'
        />
      </div>
    </div>
  )
}
