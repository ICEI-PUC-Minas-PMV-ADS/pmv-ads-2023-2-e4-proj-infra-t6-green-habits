import { Text, View } from 'react-native'
import styles from './styles.js'


export const Tag = ({ category, onClick }) => {
  return (
    <View style={styles.tag} onClick={onClick}>
      <Text style={styles.tag__category}>{category}</Text>
    </View>
  )
}
