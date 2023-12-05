import { useState } from 'react'
import {
  ImageBackground,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  deleteHabitById,
  getAllHabits,
  updateHabitById
} from '../../../services/controllers/user'
import { removeAccentsAndSpaces } from '../../../utils/removeAccentsAndSpaces'
import { Button } from '../../atoms/Button'
import { Tag } from '../../atoms/Tag'
import styles from './styles.js'

function getImageForCategory(category) {
  if (category) {
    const normalizedCategory = removeAccentsAndSpaces(category)
    const categoryImages = {
      consumosustentavel: require('assets/cards/consumosustentavel.png'),
      energia: require('assets/cards/energia.png'),
      reciclagem: require('assets/cards/reciclagem.png'),
      agua: require('assets/cards/agua.png'),
      transporte: require('assets/cards/transporte.png'),
      alimentacao: require('assets/cards/alimentacao.png'),
      conservacao: require('assets/cards/conservacao.png'),
      conscientizacao: require('assets/cards/conscientizacao.png'),
    }

    if (categoryImages.hasOwnProperty(normalizedCategory)) {
      return categoryImages[normalizedCategory]
    }
  }

  return require('assets/cards/default.png')
}

export const HabitCard = ({
  title,
  description,
  category,
  isSuggestedHabit,
  habitId,
  token,
  setUserHabits,
  addNewHabit,
  filterByCategory
}) => {
  const backgroundImage = getImageForCategory(category)
  const [expanded, setExpanded] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)

  const handleDeleteClick = async (habitId) => {
    if (token) {
      try {
        await deleteHabitById(habitId, token)
        const updatedUserHabits = await getAllHabits(token)
        setUserHabits(updatedUserHabits)
      } catch (error) {
        console.error('Erro ao excluir hábito do banco de dados:', error)
      }
    }
  }

  const toggleExpansion = () => {
    setExpanded(!expanded)
  }

  const openEditModal = () => {
    setEditedTitle(title)
    setEditModalVisible(true)
  }

  const closeEditModal = () => {
    setEditModalVisible(false)
    setEditedTitle(title)
  }

  const saveEditedTitle = async () => {
    try {
      await updateHabitById(habitId, { title: editedTitle }, token)
      const updatedUserHabits = await getAllHabits(token)
      setUserHabits(updatedUserHabits)
      closeEditModal()
    } catch (error) {
      console.error('Erro ao atualizar hábito no banco de dados:', error)
    }
  }

  return (
    <TouchableOpacity onPress={toggleExpansion}>
      <ImageBackground source={backgroundImage} style={styles.card}>
        {!expanded && <Tag category={category} onClick={() => filterByCategory && category && filterByCategory(category)} />}

        {expanded && (
          <>
            <Button
              level='primary'
              size='small'
              label='Editar hábito'
              onClick={openEditModal}
            />
          </>
        )}

        <Modal
          animationType='slide'
          transparent={true}
          visible={editModalVisible}
          onRequestClose={closeEditModal}
          style={styles.card__modal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Editar hábito</Text>
              <TextInput
                value={editedTitle}
                onChangeText={(text) => setEditedTitle(text)}
                placeholder='Novo hábito'
                style={styles.modalInput}
              />
              <Button
                level='primary'
                label='Salvar'
                onClick={saveEditedTitle}
              />
              <View style={{ marginBottom: 12 }} />
              <Button
                level='tertiary'
                label='Cancelar'
                onClick={closeEditModal}
              />
            </View>
          </View>
        </Modal>

        <View style={styles.card__container}>
          {!expanded && (
            <TouchableOpacity onPress={openEditModal}>
              <Text style={styles.card__title}>{title}</Text>
            </TouchableOpacity>
          )}

          {expanded && (
            <Text style={styles.card__description}>{description}</Text>
          )}

          {expanded && (
            <View style={styles.card__buttons}>
              {isSuggestedHabit ? (
                <Button
                  level='primary'
                  label='Adicionar hábito'
                  onClick={async () =>
                    await addNewHabit({ title, description, category })
                  }
                />
              ) : (
                <Button
                  level='tertiary'
                  label='Remover hábito'
                  onClick={async () => await handleDeleteClick(habitId)}
                />
              )}
            </View>
          )}

          <TouchableOpacity onPress={toggleExpansion}>
            <Text style={styles.card__showMoreButton}>
              {expanded ? 'Mostrar menos' : 'Mostrar mais'}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}
