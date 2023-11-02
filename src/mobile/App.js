import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { MainNavigation } from './src/routes/mainNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
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
