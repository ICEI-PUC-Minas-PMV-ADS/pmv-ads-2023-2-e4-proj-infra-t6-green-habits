'use client'

import { Button } from '@/components/atoms/Button'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

interface GoalProps {
  goal: string
  onToggle: () => void
  isChecked: boolean
  onUpdateGoal: (goalId: string, newGoal: string) => void
  onDeleteGoal: () => void
  id: string
}

export const Goal = ({
  goal,
  onToggle,
  isChecked,
  onUpdateGoal,
  onDeleteGoal,
  id,
}: GoalProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedGoal, setEditedGoal] = useState(goal || '')

  useEffect(() => {
    if (isEditing) {
      const storedEditedGoal = localStorage.getItem('editedGoal')
      if (storedEditedGoal) {
        const parsedGoals = JSON.parse(storedEditedGoal)
        const editedGoal = parsedGoals.find((g: { id: string }) => g.id === id)
        if (editedGoal) {
          setEditedGoal(editedGoal.goal)
        }
      }
    }
  }, [isEditing])

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    setTimeout(() => {
      setIsEditing(false)

      try {
        const storedEditedGoal = localStorage.getItem('editedGoal')
        const parsedGoals = storedEditedGoal ? JSON.parse(storedEditedGoal) : []

        const updatedGoals = parsedGoals.map((g: { id: string }) => {
          if (g.id === id) {
            return { ...g, goal: editedGoal }
          }
          return g
        })

        localStorage.setItem('editedGoal', JSON.stringify(updatedGoals))
        onUpdateGoal(id, editedGoal)
      } catch (error) {
        console.error('Error updating goals in localStorage:', error)
      }
    }, 1000)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedGoal(event.target.value)
  }

  return (
    <label className={styles.goal} htmlFor={goal}>
      <input
        type='checkbox'
        className={styles.goal__input}
        onChange={onToggle}
        checked={isChecked}
        id={goal}
      />
      {isEditing ? (
        <input
          type='text'
          value={editedGoal}
          onChange={handleInputChange}
          className={styles.goal__editing}
        />
      ) : (
        <p className={styles.goal__container}>
          <span className={styles.goal__text}>{editedGoal}</span>
        </p>
      )}
      {isEditing ? (
        <Button
          hasIcon={true}
          icon='check-01'
          size='small'
          className={styles.goal__button}
          onClick={handleSaveClick}
          aria='Salvar meta'
        />
      ) : (
        <Button
          hasIcon={true}
          icon={isChecked ? 'trash' : 'pencil'}
          size='small'
          className={styles.goal__button}
          onClick={isChecked ? onDeleteGoal : handleEditClick}
          aria={isChecked ? ' Apagar meta' : 'Editar meta'}
        />
      )}
    </label>
  )
}
