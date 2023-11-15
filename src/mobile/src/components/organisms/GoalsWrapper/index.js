import { ScrollView, View } from 'react-native'
import { Button } from '../../atoms/Button'
import { GText } from '../../atoms/GText'
import { Title } from '../../atoms/Title'
import { Goal } from '../../molecules/Goal'
import styles from './styles.js'

const initialGoals = [
  {
    title: 'Reduzir o desperdício de alimentos',
  },
  {
    title: 'Diminuir o uso de plásticos descartáveis',
  },
  {
    title: 'Economizar energia',
  },
  {
    title: 'Priorizar o transporte sustentável',
  },
  {
    title: 'Apoiar produtos sustentáveis e locais',
  },
]

export const GoalsWrapper = () => {
  return (
    <ScrollView style={styles.goals}>
      <View style={styles.goals__title}>
        <Title title='Metas' />
        <GText text='Nossa rota para a sustentabilidade: suas metas no Green Habits' />
        <Button level='primary' label='Criar meta' />
      </View>

      <View style={styles.goals__suggested}>
        <Title title='Metas sugeridas' />

        {initialGoals.map((goal) => (
          <Goal key={goal.title} title={goal.title} />
        ))}
      </View>

      <View style={styles.goals__myGoals}>
        <Title title='Minha metas' />
        <Goal title='' />
      </View>

      <View style={styles.goals__completed}>
        <Title title='Metas concluídas' />
        <GText text='Nossas conquistas sustentáveis: metas alcançadas' />
        <Goal title='' />
      </View>

    </ScrollView>
  )
}
