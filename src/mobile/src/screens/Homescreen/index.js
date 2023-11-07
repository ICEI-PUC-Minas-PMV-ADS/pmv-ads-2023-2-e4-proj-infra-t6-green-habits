import { ScrollView } from 'react-native'
import { HabitsWrapper } from '../../components/organisms/HabitsWrapper'
import { styles } from './styles'

export const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <HabitsWrapper />
    </ScrollView>
  )
}
