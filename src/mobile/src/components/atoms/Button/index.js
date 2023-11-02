import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import styles from './styles.js'

export const Button = ({ onClick, level, label }) => {
  const buttonLevel = styles[level]
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onClick}
        style={[styles.button, buttonLevel]}
        accessible={true}
      >
        <Text style={styles.button}>{label}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
