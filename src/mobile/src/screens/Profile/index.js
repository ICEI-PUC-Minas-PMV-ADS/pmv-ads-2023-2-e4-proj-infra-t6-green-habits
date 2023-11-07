import { ScrollView } from 'react-native'
import { FormProfile } from '../../components/organisms/FormProfile'

export const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      <FormProfile />
    </ScrollView>
  )
}
