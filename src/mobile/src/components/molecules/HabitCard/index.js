import { useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { removeAccentsAndSpaces } from '../../../utils/removeAccentsAndSpaces'
import { Button } from '../../atoms/Button'
import { Tag } from '../../atoms/Tag'
import styles from './styles.js'

function getImageForCategory(category) {
  if (category) {
    const normalizedCategory = removeAccentsAndSpaces(category)
    const categoryImages = {
      consumosustentavel: require('../../../../assets/cards/consumosustentavel.png'),
      energia: require('../../../../assets/cards/energia.png'),
      reciclagem: require('../../../../assets/cards/reciclagem.png'),
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

  return require('../../../../assets/cards/default.png')
}

export const HabitCard = ({ title, description, category }) => {
  const backgroundImage = getImageForCategory(category)
  const [expanded, setExpanded] = useState(false)

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
              <Button level='primary' label='Adicionar hábito' />
              <Button level='tertiary' label='Remover hábito' />
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
