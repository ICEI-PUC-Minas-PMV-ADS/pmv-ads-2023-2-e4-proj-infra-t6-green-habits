import { Banner } from '@/components/organisms/Banner'
import { FormProfile } from '@/components/organisms/FormProfile'
import styles from './styles.module.scss'

export default function Profile() {
  return (
    <main className={styles.profile}>
      <section className={styles.profile__form}>
        <FormProfile />
      </section>
      <section className={styles.profile__banner}>
        <Banner image='/banner.png' />
      </section>
    </main>
  )
}
