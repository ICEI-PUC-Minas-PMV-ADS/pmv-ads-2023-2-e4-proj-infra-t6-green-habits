import { Image, View } from 'react-native'
import styles from './styles.js'

export const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image style={styles.logo__image} source={require('assets/logo.png')} />
    </View>
  )
}
