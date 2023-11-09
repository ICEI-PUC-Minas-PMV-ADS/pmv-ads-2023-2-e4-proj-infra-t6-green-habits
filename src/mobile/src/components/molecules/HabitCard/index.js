import { Button } from '@/components/atoms/Button'
import { EditHabitModal } from '@/components/molecules/EditHabitModal'
import {
  deleteHabitById,
  getAllHabits,
  saveHabitToDatabase,
} from '@/services/controllers/user'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { removeAccentsAndSpaces } from '@/utils/removeAccentsAndSpaces'

const HabitCard = ({
  title,
  description,
  category,
  habitId,
  token,
  setUserHabits,
  filterByCategory,
  isSuggestedHabit,
}) => {
  const navigation = useNavigation()
  const [isHovered, setIsHovered] = useState(false)
  const [isTabFocused, setIsTabFocused] = useState(false)
  const [isEditModalVisible, setEditModalVisible] = useState(false)

  const handleAddSuggestedHabit = async () => {
    try {
      if (token) {
        const newHabit = { title, description, category }
        await saveHabitToDatabase(newHabit, token)

        const updatedUserHabits = await getAllHabits(token)
        setUserHabits(updatedUserHabits)
      }
    } catch (error) {
      console.error(
        'Erro ao adotar o hábito ou obter hábitos atualizados',
        error
      )
    }
  }

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

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      setIsTabFocused(true)
    }
  }

  const handleMouseEnter = () => {
    if (!isTabFocused) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)

    if (isEditModalVisible) {
      setEditModalVisible(false)
    }
  }

  const handleEditClick = () => {
    setEditModalVisible(true)
  }

  const renderTitle = () =>
    isHovered || isTabFocused ? null : (
      <>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      </>
    )

  const renderContent = () => {
    return isHovered || isTabFocused ? (
      <>
        <View style={styles.cardButtons}>
          <TouchableOpacity
            onPress={() => {
              console.log('Botão Clicado!')
              filterByCategory && category && filterByCategory(category)
            }}
          >
            <Text style={styles.tag}>{category}</Text>
          </TouchableOpacity>
          {!isSuggestedHabit && (
            <Button
              hasIcon={true}
              icon='pencil'
              level='primary'
              size='small'
              aria='Editar hábito'
              onPress={handleEditClick}
            />
          )}
        </View>

        <Text style={styles.cardText}>{description}</Text>

        {isSuggestedHabit ? (
          <Button
            label='Adicionar hábito'
            level='primary'
            hasIcon
            icon='check-01'
            onPress={async () => await handleAddSuggestedHabit()}
            style={styles.addHabit}
          />
        ) : (
          <Button
            label='Remover hábito'
            level='tertiary'
            hasIcon
            icon='trash'
            onPress={async () => await handleDeleteClick(habitId)}
            style={styles.removeHabit}
          />
        )}
      </>
    ) : null
  }

  const getImageForCategory = (category) => {
    if (category) {
      const normalizedCategory = removeAccentsAndSpaces(category)
      const categoryImages = {
        consumosustentavel: require('./cards/consumosustentavel.png'),
        energia: require('./cards/energia.png'),
        reciclagem: require('./cards/reciclagem.png'),
        agua: require('./cards/agua.png'),
        transporte: require('./cards/transporte.png'),
        alimentacao: require('./cards/alimentacao.png'),
        conservacao: require('./cards/conservacao.png'),
        conscientizacao: require('./cards/conscientizacao.png'),
      }

      return (
        categoryImages[normalizedCategory] || require('./cards/default.png')
      )
    }

    return require('./cards/default.png')
  }

  return (
    <>
      <TouchableOpacity
        style={[
          styles.card,
          (isHovered || isTabFocused) && styles.hovered,
          {
            backgroundImage: getImageForCategory(
              removeAccentsAndSpaces(category)
            ),
          },
        ]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsTabFocused(true)}
        onBlur={() => setIsTabFocused(false)}
      >
        {renderTitle()}
        {renderContent()}

        {isEditModalVisible && (
          <EditHabitModal
            show={isEditModalVisible}
            onHide={() => setEditModalVisible(false)}
            habit={{ title, description }}
            habitId={habitId}
            token={token}
            setUserHabits={setUserHabits}
            setIsHovered={setIsHovered}
            setIsTabFocused={setIsTabFocused}
          />
        )}
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    width: 340,
    height: 476,
    overflow: 'hidden',
  },
  hovered: {
    backgroundColor: '#ccc',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tag: {
    cursor: 'pointer',
  },
  cardTitle: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    padding: 0,
    fontSize: 16,
  },
  cardText: {
    fontSize: 14,
  },
  addHabit: {
    marginBottom: 20,
  },
  removeHabit: {
    marginBottom: 40,
  },
})

export default HabitCard
