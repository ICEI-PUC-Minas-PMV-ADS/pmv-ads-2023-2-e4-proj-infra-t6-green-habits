import { ScrollView } from 'react-native'
import { FormRegister } from '../../components/organisms/FormRegister'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'

export const RegisterPage = () => {
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
    <ScrollView style={{ backgroundColor: '#FDFFFF', paddingTop: 40 }}>
      <FormRegister />
    </ScrollView>
  )
}
