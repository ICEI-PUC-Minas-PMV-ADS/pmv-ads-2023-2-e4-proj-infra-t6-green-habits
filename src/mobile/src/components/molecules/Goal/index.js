import { useState } from 'react'
import { Switch, TextInput, View, Text } from 'react-native'
import {
  deleteGoalById,
  getAllGoals,
  updateGoalById,
} from '../../../services/controllers/user'
import { Button } from '../../atoms/Button'

import styles from './styles.js'

export const Goal = ({ title, isCompleted, id, token, setUserGoals }) => {
  const [isSelected, setSelection] = useState(false)

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

  const handleChangeCompletedStatus = async (status) => {
    try {
      const updatePayload = { completed: status }
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
    <View style={styles.goal}>
      <Switch
        value={isCompleted}
        onValueChange={async () =>
          await handleChangeCompletedStatus(!isCompleted)
        }
      />
      {isEditing ? (
        <TextInput
          value={goalTitle}
          onChangeText={(text) => setUpdatedGoalTitle(text)}
          style={styles.goalEditing}
        />
      ) : (
        <View style={styles.goalContainer}>
          <Text style={styles.goalText}>{goalTitle}</Text>
        </View>
      )}
      {isEditing ? (
        <Button style={styles.goalButton} onPress={handleSaveEdit} />
      ) : (
        <Button
          style={styles.goalButton}
          onPress={
            isCompleted ? async () => await handleDeleteGoal() : handleEditClick
          }
        />
      )}
    </View>
  )
}
