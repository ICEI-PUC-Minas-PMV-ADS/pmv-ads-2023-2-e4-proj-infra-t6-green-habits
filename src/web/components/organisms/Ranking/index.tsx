import { Heading } from '@/components/atoms/Heading'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { HabitCard } from '@/components/molecules/HabitCard'
import styles from './styles.module.scss'

export const Ranking = () => {
  return (
    <section className={styles.ranking}>
      <article className={styles.ranking__container}>
        <div className={styles.ranking__textContainer}>
          <div className={styles.ranking__heading}>
            <Heading
              align='left'
              children='Ranking +'
              color='black'
              level='4'
            />
            <Icon icon='trophy' />
          </div>

          <Text
            align='left'
            children='Estas são as categorias mais populares em seus hábitos adicionados'
            color='black'
          />
        </div>

        <div className={styles.ranking__cardsContainer}>
          <HabitCard image='/card.png' />
          <HabitCard image='/card.png' />
        </div>
      </article>

      <article className={styles.ranking__secondContainer}>
        <div className={styles.ranking__textContainer}>
          <div className={styles.ranking__heading}>
            <Heading
              align='left'
              children='Ranking -'
              color='black'
              level='4'
            />
            <Icon icon='repeat' />
          </div>
          <Text
            align='left'
            children='Estas são as categorias menos adicionadas em sua lista de hábitos'
            color='black'
          />
        </div>

        <div className={styles.ranking__cardsContainer}>
          <HabitCard image='/card.png' />
          <HabitCard image='/card.png' />
        </div>
      </article>
    </section>
  )
}
