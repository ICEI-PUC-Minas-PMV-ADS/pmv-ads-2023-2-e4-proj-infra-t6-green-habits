import { Banner } from '@/components/organisms/Banner'
import { FormProfile } from '@/components/organisms/FormProfile'
import styles from './styles.module.scss'

export default function Profile() {
  return (
    <main className={styles.profile}>
      <section className={styles.profile__form}>
        <FormProfile />
      </section>
      <Banner image='/banner.png' />
    </main>
  )
}
