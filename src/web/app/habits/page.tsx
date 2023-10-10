import { Banner } from '@/components/organisms/Banner'
import styles from './styles.module.scss'

export default function Habits() {
  return (
    <main className={styles.habits}>
      <Banner image='/banner.png' />
    </main>
  )
}
