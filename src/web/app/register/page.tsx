import { Banner } from '@/components/organisms/Banner'
import styles from './styles.module.scss'

export default function Register() {
  return (
    <main className={styles.register}>
      <Banner image='/banner.png' />
    </main>
  )
}
