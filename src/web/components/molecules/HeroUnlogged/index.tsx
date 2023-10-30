import { Text } from '@/components/atoms/Text'
import styles from './styles.module.scss'

export const HeroUnlogged = () => {
  return (
    <section className={styles.hero}>
      <article className={styles.hero__container}>
        <h1 className={styles.hero__heading}>
          Adote o <strong className={styles.hero__strong}>Green Habits</strong>{' '}
          em sua rotina
        </h1>
        <Text
          align='left'
          children='Descubra o poder da sustentabilidade em pequenos hábitos diários'
          color='black'
        />
      </article>
    </section>
  )
}
