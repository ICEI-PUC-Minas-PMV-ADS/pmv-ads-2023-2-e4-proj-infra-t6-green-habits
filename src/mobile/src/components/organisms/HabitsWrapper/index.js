import { ScrollView, View } from 'react-native'
import habits from '../../../data/habits.json'
import { GText } from '../../atoms/GText'
import { Title } from '../../atoms/Title'
import { HabitCard } from '../../molecules/HabitCard'
import styles from './styles.js'

export const HabitsWrapper = () => {
  return (
    <ScrollView style={styles.cards}>
      <View style={styles.cards__title}>
        <Title title='Hábitos' />
        <GText text='Confira nossa seleção de hábitos para o seu dia a dia' />
      </View>
      <View style={styles.cards__habits}>
        {habits.slice(0, 10).map((habit, index) => (
          <HabitCard
            key={index}
            title={habit.title}
            description={habit.description}
            category={habit.category}
          />
        ))}
      </View>
      <View style={styles.cards__myHabits}>
        <Title title='Meus Hábitos' />

        <View style={styles.cards__myAddedHabits}></View>
      </View>
    </ScrollView>
  )
}
