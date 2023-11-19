import { useState } from 'react'
import { View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { Button } from '../../atoms/Button'
import { GText } from '../../atoms/GText'
import styles from './styles.js'
import { deleteGoalById, getAllGoals, updateGoalById } from '../../../services/controllers/user'

export const Goal = ({ title, isCompleted, goalId, token, setUserGoals }) => {
  const [checked, setChecked] = useState(false)

  const deleteGoal = async (goalId) => {
    await deleteGoalById(goalId, token)
    const updatedGoals = await getAllGoals(token)
    setUserGoals(updatedGoals)
  }

  const handleChangeCompletedStatus = async (status) => {
    try {
      const updatePayload = { completed: status };
      await updateGoalById(goalId, token, updatePayload)
      const updatedGoals = await getAllGoals(token)

      setUserGoals(updatedGoals)
    } catch (error) {
      console.error('Erro ao atualizar meta no banco de dados:', error)
    }
  }

  return (
    <View style={styles.goal}>
      <Checkbox
        status={isCompleted ? 'checked' : 'unchecked'}
        onPress={async () => await handleChangeCompletedStatus(!isCompleted)}
        color='#398278'
      />
      <GText
        text={title}
        color='white'
      />
      {
        isCompleted ?
          <Button level='tertiary' label='Remover meta' 
            onClick={async () => deleteGoal(goalId)}
          />
          :
          <Button level='primary' label='Editar meta' />
      }
    </View>
  )
}
