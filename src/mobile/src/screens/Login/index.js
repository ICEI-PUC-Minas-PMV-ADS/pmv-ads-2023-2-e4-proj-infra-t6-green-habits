import { ScrollView } from 'react-native'
import { FormLogin } from '../../components/organisms/FormLogin'
import { styles } from './styles'

export const LoginPage = () => {
  return (
    <ScrollView style={styles.container}>
      <FormLogin />
    </ScrollView>
  )
}
