import { Text, View } from 'react-native'
import styles from './styles.js'


export const Tag = ({ category }) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tag__category}>{category}</Text>
    </View>
  )
}
