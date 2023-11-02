import { Text, View } from 'react-native'
import styles from './styles.js'

export const GText = ({ text, color }) => {
  const textColor = styles[color]

  return (
    <View>
      <Text style={[styles.text, textColor]}>{text}</Text>
    </View>
  )
}
