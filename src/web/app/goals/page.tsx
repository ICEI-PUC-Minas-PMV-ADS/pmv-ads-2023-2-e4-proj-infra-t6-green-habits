import { GoalsWrapper } from '@/components/organisms/GoalsWrapper'
import { Ranking } from '@/components/organisms/Ranking'
import styles from './styles.module.scss'

export default function Goals() {
  return (
    <main className={styles.goals}>
      <GoalsWrapper />
      <Ranking />
    </main>
  )
}
