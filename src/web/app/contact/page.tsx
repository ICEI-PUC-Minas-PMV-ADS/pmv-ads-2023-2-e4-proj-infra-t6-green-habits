import { AboutUs } from '@/components/organisms/AboutUs'
import { FormContactUs } from '@/components/organisms/FormContactUs'
import styles from './styles.module.scss'

export default function Contact() {
  return (
    <main className={styles.contact}>
      <FormContactUs />
      <AboutUs />
    </main>
  )
}
