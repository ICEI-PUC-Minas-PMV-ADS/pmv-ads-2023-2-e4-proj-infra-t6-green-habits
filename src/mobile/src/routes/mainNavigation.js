import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginPage } from '~screens/Login'
import { RegisterPage } from '~screens/Register'
import { ProtectedNavigation } from '../components/molecules/Navigation'
import { useNavigation } from '@react-navigation/native'
const Stack = createNativeStackNavigator()

export const MainNavigation = () => {
  const navigation = useNavigation()
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.navigate('Tabs', { screen: 'Home' })
      }
    }
    checkToken()
  }, [])
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
