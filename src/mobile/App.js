import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MainNavigation } from './src/routes/mainNavigation'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer >
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
    margin: 20,
  },
})
