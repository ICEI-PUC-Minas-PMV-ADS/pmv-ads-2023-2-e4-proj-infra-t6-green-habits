'use client'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { HabitCard } from '@/components/molecules/HabitCard'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

export const HabitsWrapper = () => {
  const habitsData: string | any[] = [
    /* armazenar a lista de hábitos do banco aqui */
  ]
  const initialItemsData = habitsData.slice(0, 2)
  const additionalItemsData = habitsData.slice(2)
  const pathname = usePathname()

  return (
    <section className={styles.wrapper} id='habitsWrapper'>
      <div className={styles.wrapper__heading}>
        <Heading align='left' children='Hábitos' color='black' level='2' />
        <Text
          align='left'
          children='Confira nossa seleção de hábitos para o seu dia a dia'
          color='black'
        />

        <Button
          className={styles.wrapper__buttonDesktop}
          label={pathname === '/' ? 'Meus hábitos' : 'Contato'}
          level='primary'
          isButton={false}
          href={pathname === '/' ? '/habits' : '/contact'}
        />
      </div>

      <div className={styles.wrapper__initialItems}>
        {/* {initialItemsData.map((item, index) => (
          <HabitCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.description}
          />
        ))} */}
        <HabitCard image='/card.png' />
        <HabitCard image='/card.png' />
      </div>

      {pathname !== '/' && (
        <div className={styles.wrapper__additionalItems}>
          {/* {additionalItemsData.map((item, index) => (
            <HabitCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.description}
            />
          ))} */}
          <HabitCard image='/card.png' />
          <HabitCard image='/card.png' />
          <HabitCard image='/card.png' />
          <HabitCard image='/card.png' />
        </div>
      )}

      <Button
        className={styles.wrapper__buttonMobile}
        label={pathname === '/' ? 'Meus hábitos' : 'Contato'}
        level='primary'
        isButton={false}
        href={pathname === '/' ? '/habits' : '/contact'}
      />
    </section>
  )
}
