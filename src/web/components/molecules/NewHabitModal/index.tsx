'use client'

import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { Input } from '@/components/molecules/Input'
import { Habit } from '@/components/organisms/HabitsWrapper'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './styles.module.scss'

interface NewHabitModalProps {
  onClose: () => void
  addHabit: (newHabit: Habit) => void
}

export const NewHabitModal = ({ onClose, addHabit }: NewHabitModalProps) => {
  const [habitData, setHabitData] = useState({
    title: '',
    description: '',
    category: '',
  })

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

  const handleAdoptHabit = () => {
    const newHabitData = {
      habitId: uuidv4(),
      title: habitData.title,
      description: habitData.description,
      category: habitData.category,
    }

    addHabit(newHabitData)

    onClose()
  }

  const handleInputChange = (event: { target: { id: any; value: any } }) => {
    const { id, value } = event.target
    setHabitData({
      ...habitData,
      [id]: value,
    })
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__closeButton} onClick={onClose}>
        <Icon icon='x' />
      </div>

      <Text children='Qual hábito você quer adotar?' />

      <Input
        label='Título'
        id='title'
        placeholder='Ir para o trabalho de bicicleta'
        type='text'
        icon='pencil'
        isTextarea
        backgroundColor='white'
        color='black'
        onChange={handleInputChange}
      />

      <Input
        label='Descrição'
        id='description'
        placeholder='Ir para o trabalho de bicicleta é bom'
        type='text'
        icon='pencil'
        isTextarea
        backgroundColor='white'
        color='black'
        onChange={handleInputChange}
      />

      <Text align='left' children='Categoria' color='black' />

      <select
        id='category'
        className={styles.modal__select}
        onChange={handleInputChange}
      >
        <option value=''>Selecione uma categoria</option>
        <option value='Consumo Sustentável'>Consumo Sustentável</option>
        <option value='Energia'>Energia</option>
        <option value='Reciclagem'>Reciclagem</option>
        <option value='Aguá'>Água</option>
        <option value='Transporte'>Transporte</option>
        <option value='Alimentação'>Alimentação</option>
        <option value='Conservação'>Conservação</option>
        <option value='Conscientização'>Conscientização</option>
      </select>

      <div className={styles.modal__interaction}>
        <Button
          label='Adotar hábito'
          level='primary'
          onClick={handleAdoptHabit}
        />
        <Button label='Fechar' level='tertiary' onClick={onClose} />
      </div>
    </div>
  )
}
