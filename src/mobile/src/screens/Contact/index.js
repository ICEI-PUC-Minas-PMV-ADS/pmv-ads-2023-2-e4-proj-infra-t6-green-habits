import { ScrollView } from 'react-native'
import { AboutUs } from '../../components/organisms/AboutUs'
import { FormContactUs } from '../../components/organisms/FormContactUs'
import { styles } from './styles'

export const ContactPage = () => {
  return (
    <ScrollView style={styles.container}>
      <FormContactUs />
      <AboutUs />
    </ScrollView>
  )
}
