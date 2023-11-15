import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles.js'

export const Button = ({ onClick, level, label, size }) => {
  const buttonLevel = styles[level]
  const buttonSize = styles[size]
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onClick}
        style={[styles.button, buttonLevel, buttonSize]}
        accessible={true}
      >
        {size === 'small' ? (
          <Icon name='edit' size={15} color='#FDFFFF' />
        ) : (
          <Text style={styles.button}>{label}</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  )
}
