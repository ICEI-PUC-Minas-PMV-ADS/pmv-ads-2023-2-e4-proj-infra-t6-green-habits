import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { HabitCard } from '@/components/molecules/HabitCard'
import styles from './styles.module.scss'

export const HabitsWrapper = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__heading}>
        <Heading align='left' children='Hábitos' color='black' level='2' />
        <Text
          align='left'
          children='Confira nossa seleção de hábitos para o seu dia a dia'
          color='black'
        />
        <Button
          className={styles.wrapper__buttonDesktop}
          label='Criar meta'
          level='primary'
        />
      </div>
      <div className={styles.wrapper__container}>
        <HabitCard image='/card.png' />
        <HabitCard image='/card.png' />
      </div>
      <Button
        className={styles.wrapper__buttonMobile}
        label='Criar meta'
        level='primary'
      />
    </section>
  )
}
