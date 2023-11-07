import { ScrollView } from 'react-native'
import { FormRegister } from '../../components/organisms/FormRegister'

export const RegisterPage = () => {
  return (
    <ScrollView style={{ backgroundColor: '#FDFFFF', paddingTop: 40 }}>
      <FormRegister />
    </ScrollView>
  )
}
