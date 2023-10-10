import { Banner } from '@/components/organisms/Banner'
import styles from './styles.module.scss'

export default function Login() {
  return (
    <main className={styles.Login}>
      <Banner image='/banner.png' />
    </main>
  )
}
