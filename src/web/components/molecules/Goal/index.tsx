'use client'

import { Button } from '@/components/atoms/Button'
import { Goal as GoalType } from '@/components/organisms/GoalsWrapper'
import {
  deleteGoalById,
  getAllGoals,
  updateGoalById,
} from '@/services/controllers/user'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from './styles.module.scss'

interface GoalProps {
  title: string
  isCompleted: boolean
  id: string
  token: string
  setUserGoals: Dispatch<SetStateAction<GoalType[]>>
}

export const Goal = ({
  title,
  isCompleted,
  id,
  token,
  setUserGoals,
}: GoalProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [goalTitle, setUpdatedGoalTitle] = useState(title)

  const handleSaveEdit = async () => {
    try {
      const updatePayload = { title: goalTitle }
      await updateGoalById(id, token, updatePayload)
      const updatedGoals = await getAllGoals(token)

      setUserGoals(updatedGoals)
    } catch (error) {
      console.error('Erro ao atualizar meta no banco de dados:', error)
    }
  }

  const handleChangeCompletedStatus = async (status: boolean) => {
    try {
      const updatePayload = { completed: status };
      await updateGoalById(id, token, updatePayload)
      const updatedGoals = await getAllGoals(token)

      setUserGoals(updatedGoals)
    } catch (error) {
      console.error('Erro ao atualizar meta no banco de dados:', error)
    }
  }

  const handleDeleteGoal = async () => {
    try {
      await deleteGoalById(id, token)
      const updatedGoals = await getAllGoals(token)

      setUserGoals(updatedGoals)
    } catch (error) {
      console.error('Erro ao deletar meta no banco de dados:', error)
    }
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  return (
    <label className={styles.goal} htmlFor={`goal_${id}`}>
      <input
        type='checkbox'
        className={styles.goal__input}
        onChange={async () => await handleChangeCompletedStatus(!isCompleted)}
        checked={isCompleted}
        id={`goal_${id}`}
      />
      {isEditing ? (
        <input
          type='text'
          value={goalTitle}
          onChange={(e) => {
            let currentValue = e.target.value
            setUpdatedGoalTitle(currentValue)
          }}
          className={styles.goal__editing}
        />
      ) : (
        <p className={styles.goal__container}>
          <span className={styles.goal__text}>{goalTitle}</span>
        </p>
      )}
      {isEditing ? (
        <Button
          hasIcon={true}
          icon='check-01'
          size='small'
          className={styles.goal__button}
          onClick={handleSaveEdit}
          aria='Salvar meta'
        />
      ) : (
        <Button
          hasIcon={true}
          icon={isCompleted ? 'trash' : 'pencil'}
          size='small'
          className={styles.goal__button}
          onClick={
            isCompleted ? async () => await handleDeleteGoal() : handleEditClick
          }
          aria={isCompleted ? ' Apagar meta' : 'Editar meta'}
        />
      )}
    </label>
  )
}
