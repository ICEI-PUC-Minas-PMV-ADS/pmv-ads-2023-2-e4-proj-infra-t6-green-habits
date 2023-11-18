import { ScrollView, View } from 'react-native'
import { HabitCard } from '../../components/molecules/HabitCard'
import { styles } from './styles'

export const HomePage = () => {
  return (
    <ScrollView style={styles.home}>
      <View style={styles.home__cardsContainer}>
        <HabitCard
          title='Usar bicicleta para ir ao trabalho'
          description='Optar por usar a bicicleta ajuda a reduzir a emissão de poluentes e o tráfego nas ruas'
          category='Transporte'
          isSuggestedHabit={true}
        />
        <HabitCard
          title='Reduzir o desperdício de água em casa'
          description='Não esquecer de fechar a torneira durante o escovar dos dentes'
          category='Consumo sustentável'
          isSuggestedHabit={true}
        />
      </View>
    </ScrollView>
  )
}
