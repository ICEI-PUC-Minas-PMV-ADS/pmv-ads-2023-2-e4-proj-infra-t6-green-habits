import { ScrollView } from 'react-native'
import { FormLogin } from '../../components/organisms/FormLogin'
import { styles } from './styles'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

export const LoginPage = () => {
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
    <ScrollView style={styles.container}>
      <FormLogin />
    </ScrollView>
  )
}
