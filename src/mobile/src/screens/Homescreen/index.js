import { ScrollView, View } from 'react-native'
import { HabitCard } from '../../components/molecules/HabitCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { styles } from './styles'
import { saveHabitToDatabase } from '../../services/controllers/user'

const suggestedHabits = [
  {
    title: 'Usar bicicleta para ir ao trabalho',
    description: 'Optar por usar a bicicleta ajuda a reduzir a emissão de poluentes e o tráfego nas ruas',
    category: 'Transporte'
  },
  {
    title: 'Reduzir o desperdício de água em casa',
    description: 'Não esquecer de fechar a torneira durante o escovar dos dentes',
    category: 'Consumo sustentável'
  }
]

export const HomePage = () => {
  const navigation = useNavigation()
  const [userToken, setUserToken] = useState()

  const addNewHabit = async (newHabit) => {
    try {
      if (userToken) {
        await saveHabitToDatabase(newHabit, userToken)
        navigation.navigate('Tabs', { screen: 'Habits' })
      }
    } catch (error) {
      console.error(
        'Erro ao adotar o hábito ou obter hábitos atualizados',
        error
      )
    }
  }

  useEffect(() => {
    const getHabits = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.navigate('Login')
      }
      setUserToken(token)
    }
    getHabits()
  }, [])
  return (
    <ScrollView style={styles.home}>
      <View style={styles.home__cardsContainer}>
        {suggestedHabits.map((habit, index) => (
          <HabitCard
            key={index}
            title={habit.title}
            description={habit.description}
            category={habit.category}
            isSuggestedHabit={true}
            addNewHabit={addNewHabit}
          />
        ))}
      </View>
    </ScrollView>
  )
}
