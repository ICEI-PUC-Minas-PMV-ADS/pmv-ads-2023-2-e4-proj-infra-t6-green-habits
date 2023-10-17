import { Banner } from '@/components/organisms/Banner'
import { HabitsWrapper } from '@/components/organisms/HabitsWrapper'
import { MyHabits } from '@/components/organisms/MyHabits'
import styles from './styles.module.scss'

export default function Habits() {
  return (
    <main className={styles.habits}>
      <HabitsWrapper />
      <MyHabits />
      <Banner image='/banner.png' />
    </main>
  )
}
