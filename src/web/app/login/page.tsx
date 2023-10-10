import { Banner } from '@/components/organisms/Banner'
import styles from './styles.module.scss'

export default function Login() {
  return (
    <main className={styles.login}>
      <Banner image='/banner.png' />
    </main>
  )
}
