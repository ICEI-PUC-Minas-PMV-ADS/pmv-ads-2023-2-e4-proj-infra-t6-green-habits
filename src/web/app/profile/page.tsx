import { Banner } from '@/components/organisms/Banner'
import styles from './styles.module.scss'

export default function Profile() {
  return (
    <main className={styles.profile}>
      <Banner image='/banner.png' />
    </main>
  )
}
