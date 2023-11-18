import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginPage } from '~screens/Login'
import { RegisterPage } from '~screens/Register'
import { ProtectedNavigation } from '../components/molecules/Navigation'
const Stack = createNativeStackNavigator()

export const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Register'
        component={RegisterPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Tabs'
        component={ProtectedNavigation}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  )
}
