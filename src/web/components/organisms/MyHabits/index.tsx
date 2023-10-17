import { Heading } from '@/components/atoms/Heading'
import { HabitCard } from '@/components/molecules/HabitCard'
import styles from './styles.module.scss'

export const MyHabits = () => {
  return (
    <section className={styles.myHabits}>
      <Heading align='center' children='Meus hábitos' color='black' level='3' />
      
      <div className={styles.myHabits__container}>
        <HabitCard image='/card.png' />
        <HabitCard image='/card.png' />
        <HabitCard image='/card.png' />
        <HabitCard image='/card.png' />
      </div>
    </section>
  )
}
