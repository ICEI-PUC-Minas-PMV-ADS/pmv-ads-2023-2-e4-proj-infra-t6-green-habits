import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Logo } from './src/components/atoms/Logo'
import { MainNavigation } from './src/routes/mainNavigation'

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFFFF',
    justifyContent: 'center',
    padding: 4,
  },
})
