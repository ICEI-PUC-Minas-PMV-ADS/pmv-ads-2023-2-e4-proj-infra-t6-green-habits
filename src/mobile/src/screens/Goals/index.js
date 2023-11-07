import { ScrollView } from 'react-native'
import { GoalsWrapper } from '../../components/organisms/GoalsWrapper'
import { Ranking } from '../../components/organisms/Ranking'
import { styles } from './styles'

export const GoalsPage = () => {
  return (
    <ScrollView style={styles.container}>
      <GoalsWrapper />
      <Ranking />
    </ScrollView>
  )
}
