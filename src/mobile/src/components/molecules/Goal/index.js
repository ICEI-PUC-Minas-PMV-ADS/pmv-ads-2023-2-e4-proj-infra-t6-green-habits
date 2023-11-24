import { useState } from 'react'
import { View } from 'react-native'
import { Checkbox, Modal, TextInput } from 'react-native-paper'
import {
  deleteGoalById,
  getAllGoals,
  updateGoalById,
} from '../../../services/controllers/user'
import { Button } from '../../atoms/Button'
import { GText } from '../../atoms/GText'
import styles from './styles.js'

export const Goal = ({ title, isCompleted, goalId, token, setUserGoals }) => {
  const [checked, setChecked] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editedGoal, setEditedGoal] = useState(title)

  const openEditModal = (title) => {
    setEditedGoal(title)
    setEditModalVisible(true)
  }

  const closeEditModal = () => {
    setEditModalVisible(false)
    setEditedGoal('')
  }

  const saveEditedGoal = async () => {
    closeEditModal()
  }

  const deleteGoal = async (goalId) => {
    await deleteGoalById(goalId, token)
    const updatedGoals = await getAllGoals(token)
    setUserGoals(updatedGoals)
  }

  const handleChangeCompletedStatus = async (status) => {
    try {
      const updatePayload = { completed: status }
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
        onPress={() => handleChangeCompletedStatus(!isCompleted)}
        color='#398278'
      />
      <GText text={title} color='white' />
      {isCompleted ? (
        <Button
          level='tertiary'
          label='Remover meta'
          onClick={() => deleteGoal(goalId)}
        />
      ) : (
        <>
          <Button
            level='primary'
            label='Editar meta'
            onClick={() => openEditModal(title)}
          />
          <Modal
            animationType='slide'
            transparent={true}
            visible={editModalVisible}
            onRequestClose={closeEditModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <GText style={styles.modalText}>Editar Meta</GText>
                <TextInput
                  value={editedGoal}
                  onChangeText={(text) => setEditedGoal(text)}
                  placeholder='Nova meta'
                  style={styles.modalInput}
                />
                <Button
                  level='primary'
                  label='Salvar'
                  onClick={saveEditedGoal}
                />
                <Button
                  level='tertiary'
                  label='Cancelar'
                  onClick={closeEditModal}
                />
              </View>
            </View>
          </Modal>
        </>
      )}
    </View>
  )
}
