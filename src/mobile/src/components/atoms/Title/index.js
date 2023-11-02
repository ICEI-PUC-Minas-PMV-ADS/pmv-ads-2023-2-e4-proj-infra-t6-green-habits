import { Text, View } from 'react-native'
import styles from './styles.js'

export const Title = ({ title, color }) => {
  const titleColor = styles[color]
  return (
    <View>
      <Text style={[styles.title, titleColor]}>{title}</Text>
    </View>
  )
}
