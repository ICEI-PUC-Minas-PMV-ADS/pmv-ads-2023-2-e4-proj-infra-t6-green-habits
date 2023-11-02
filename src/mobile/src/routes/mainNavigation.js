import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import { ContactPage } from '~screens/Contact'
import { GoalsPage } from '~screens/Goals'
import { HabitsPage } from '~screens/Habits'
import { HomePage } from '~screens/Homescreen'
import { LoginPage } from '~screens/Login'
import { ProfilePage } from '~screens/Profile'
import { RegisterPage } from '~screens/Register'

export const MainNavigation = () => {
  return (
    <Stack.Navigator>
    {/* <Stack.Navigator initialRouteName='Login'> */}
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
        name='Home'
        component={HomePage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Contact'
        component={ContactPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Goals'
        component={GoalsPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Habits'
        component={HabitsPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Profile'
        component={ProfilePage}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  )
}
