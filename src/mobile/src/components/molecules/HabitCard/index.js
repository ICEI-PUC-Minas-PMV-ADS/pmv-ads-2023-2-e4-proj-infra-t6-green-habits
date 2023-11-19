import { useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { removeAccentsAndSpaces } from '../../../utils/removeAccentsAndSpaces'
import { deleteHabitById, getAllHabits } from '../../../services/controllers/user'
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

export const HabitCard = ({ title, description, category, isSuggestedHabit, habitId, token, setUserHabits }) => {
  const backgroundImage = getImageForCategory(category)
  const [expanded, setExpanded] = useState(false)

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

  return (
    <TouchableOpacity onPress={toggleExpansion}>
      <ImageBackground source={backgroundImage} style={styles.card}>
        {!expanded && <Tag category={category} />}

        {expanded && <Button level='primary' size='small' />}

        <View style={styles.card__container}>
          {!expanded && <Text style={styles.card__title}>{title}</Text>}

          {expanded && (
            <Text style={styles.card__description}>{description}</Text>
          )}

          {expanded && (
            <View style={styles.card__buttons}>
              {isSuggestedHabit ? 
                <Button level='primary' label='Adicionar hábito' />
                : 
                <Button level='tertiary' label='Remover hábito' 
                  onClick={async () => await handleDeleteClick(habitId)} 
                />}
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
