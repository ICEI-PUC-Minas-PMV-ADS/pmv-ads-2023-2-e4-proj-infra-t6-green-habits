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

export const GText = ({ text, color }) => {
  const textColor = styles[color]

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (fontsLoaded) {
    return (
      <View>
        <Text
          style={[
            styles.text,
            textColor,
            { fontFamily: 'Poppins_200ExtraLight' },
          ]}
        >
          {text}
        </Text>
      </View>
    )
  } else {
    return null
  }
}
