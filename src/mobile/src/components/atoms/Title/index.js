import { Text, View } from 'react-native'
import styles from './styles.js'

export const Title = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
