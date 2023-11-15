import { ScrollView } from 'react-native'
import { FormProfile } from '../../components/organisms/FormProfile'
import { styles } from './styles'

export const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      <FormProfile />
    </ScrollView>
  )
}
