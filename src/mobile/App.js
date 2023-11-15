import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HabitsWrapper } from './src/components/organisms/HabitsWrapper'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HabitsWrapper />
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
