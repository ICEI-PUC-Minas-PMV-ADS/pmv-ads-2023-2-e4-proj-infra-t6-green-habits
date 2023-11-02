import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Title } from 'src/components/atoms/Title'
import { FormContactUs } from 'src/components/organisms/FormContactUs'

function CustomView({ children }) {
  return (
    <View style={styles.container}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Text) {
          return React.cloneElement(child, {
            style: [{ fontFamily: 'PoppinsRegular' }, child.props.style],
          })
        }
        return child
      })}
    </View>
  )
}

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <CustomView>
      <NavigationContainer>
        {/* <MainNavigation /> */}
        <FormContactUs/>
      </NavigationContainer>
    </CustomView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
