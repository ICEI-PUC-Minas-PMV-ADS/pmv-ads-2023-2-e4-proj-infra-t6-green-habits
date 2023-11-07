import { Text, View } from 'react-native'
import styles from './styles.js'

import {
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'

export const Title = ({ title, color }) => {
  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })
  
  const titleColor = styles[color]

  if (fontsLoaded) {
    return (
      <View>
        <Text
          style={[
            styles.title,
            titleColor,
            { fontFamily: 'Poppins_400Regular' },
          ]}
        >
          {title}
        </Text>
      </View>
    )
  } else {
    return null
  }
}
