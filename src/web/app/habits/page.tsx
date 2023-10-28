'use client'

import { Banner } from '@/components/organisms/Banner'
import { HabitsWrapper } from '@/components/organisms/HabitsWrapper'
import styles from './styles.module.scss'

export default function Habits() {
 
  return (
      <main className={styles.habits}>
        <HabitsWrapper />
        <Banner image='/banner.png' />
      </main>
    )
  
}
